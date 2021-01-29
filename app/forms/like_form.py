from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class NewLike(FlaskForm):
    userId = IntegerField("User", [DataRequired()])
    recipeId = IntegerField("Recipe", [DataRequired()])
