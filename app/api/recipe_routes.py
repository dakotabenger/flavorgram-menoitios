from flask import Blueprint, jsonify
from dotenv import load_dotenv
from flask_login import login_required
from app.config import Config
from app.models import Recipe

load_dotenv

recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route('/feed', methods=["GET"])
def get_recipes():
    recipes = Recipe.query.all()
    return {"recipes": [recipe.to_dict() for recipe in recipes]}


@recipe_routes.route('/create_recipe', methods=["POST"])
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


@recipe_routes.route('searched/<keyword>', methods=['GET'])
def searched(keyword):
    recipes = Recipe.query.filter(Recipe.dish_name.ilike(f'%{keyword}%')).all()
    return {}
