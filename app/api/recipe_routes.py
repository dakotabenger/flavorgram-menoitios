from flask import Flask, render_template, redirect
from dotenv import load_dotenv
load_dotenv
from flask_login import login_required
from app.config import Config
from app.forms import NewRecipe
from app.models import Recipe

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
migrate = Migrate(app, db)


@app.route('/feed', methods=["GET"])
@login_required
def get_recipes():
    recipes = Recipe.query.all()
    return {"recipes": [recipe.to_dict() for recipe in recipes]}

@app.route('/create_recipe', methods=["POST"])
@login_required
def create_recipe():
    form = NewRecipe()
    if form.validate_on_submit():
        data = form.data
        new_recipe = Recipe(userId=data["userId"],
                                    dish_name=data["dish_name"],
                                    ingredients=data["ingredients"],
                                    instructions=data["instructions"],
                                    photoUrl=data["photoUrl"])
        db.session.add(new_recipe)
        db.session.commit()
        return redirect("/feed")
    return "Uh-oh. There's something wrong here..."
