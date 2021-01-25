from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    recipeId = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String(256), nullable=False)
