from .db import db
from . import User
from sqlalchemy.orm import relationship


class Recipe(db.Model):
    __tablename__ = "recipes"

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    dish_name = db.Column(db.String(50), nullable=False)
    ingredients = db.Column(db.String, nullable=False)
    instructions = db.Column(db.String, nullable=False)
    photoUrl = db.Column(db.String, nullable=False)

    user = db.relationship("User")
    comments = db.relationship('Comment')
    likingUsers = db.relationship(
        "Like", back_populates="likedRecipes")

    def to_simple_dict(self):
        return {
            "id": self.id,

            "userId": self.userId,
            "dish_name": self.dish_name,
            "ingredients": self.ingredients,
            "instructions": self.instructions,
            "photoUrl": self.photoUrl,
            "numLikes": len(self.likingUsers),
            "numComments": len(self.comments)

        }

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "dish_name": self.dish_name,
            "ingredients": self.ingredients,
            "instructions": self.instructions,
            "photoUrl": self.photoUrl,
            "comments": [comment.to_dict() for comment in self.comments],
            "numLikes": len(self.likingUsers),
            "likers": [liker.to_dict() for liker in self.likingUsers],
            "user": self.user.to_dict()
        }
