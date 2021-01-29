from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.validators import DataRequired


class NewFollow(FlaskForm):
    followerId = IntergerField("followerId", [DataRequired()])
    followingId = IntergerField("followingId", [DataRequired()])