from .db import db
from datetime import datetime

class Like(db.Model):
    __tablename__ = "likes"

    id = db.Column(db.Integer, primary_key=True)
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    likedRecipes = db.relationship(
        "Recipe", back_populates="likingUsers")

    def to_dict(self):
        return {
            "id": self.id,
            "recipeId": self.recipeId,
            "userId": self.userId
        }
