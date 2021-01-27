from .db import db
from .like import Like
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

    user = relationship("User")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "dish_name": self.dish_name,
            "ingredients": self.ingredients,
            "instructions": self.instructions,
            "photo_url": self.photoUrl
        }
