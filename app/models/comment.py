from .db import db
from .like import Like
from . import User, Recipe
from sqlalchemy.orm import relationship



class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    comment = db.Column(db.String(256), nullable=False)

    user = relationship("User")
    recipe = relationship("Recipe")
