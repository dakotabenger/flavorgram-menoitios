from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class NewComment(FlaskForm):
    userId = IntegerField("User", [DataRequired()])
    recipeId = IntegerField("Recipe", [DataRequired()])
    comment = StringField("Comment", [DataRequired()])
