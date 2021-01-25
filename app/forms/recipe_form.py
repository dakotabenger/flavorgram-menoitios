from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, SelectField

class NewRecipe(FlaskForm):
    dish_name = StringField("Title", [DataRequired()])
    ingredients = StringField("Ingredients", [DataRequired()])
    instructions = StringField("Instructions", [DataRequired()])
    photoUrl = StringField("PhotoURL", [DataRequired()])
