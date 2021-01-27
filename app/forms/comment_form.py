from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, SelectField

class NewComment(FlaskForm):
    userId = IntergerField("User", [DataRequired()])
    comment = StringField("Comment", [DataRequired()])
