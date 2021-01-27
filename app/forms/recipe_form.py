from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired


class NewRecipe(FlaskForm):
    userId = IntegerField("User", [DataRequired()])
    dish_name = StringField("Title", [DataRequired()])
    ingredients = StringField("Ingredients", [DataRequired()])
    instructions = StringField("Instructions", [DataRequired()])
    photoUrl = StringField("PhotoURL", [DataRequired()])
