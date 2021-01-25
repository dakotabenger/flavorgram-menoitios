from .models import user, like, db, comment

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
        "photo_url": self.photoUrl
        }
