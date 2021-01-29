from .db import db
from sqlalchemy.orm import relationship

class Follow(db.Model):
    __tablename__ = "follows"

    id = db.Column(db.Integer, primary_key=True)
    followerId = db.Column("followerId", db.Integer, db.ForeignKey("users.followerId"))
    userId = db.Column("userId", db.Integer, db.ForeignKey("users.id"))

    users = db.relationship("User")
    # following = db.relationship("Follow", primaryjoin=id==selfjoin1,  back_populates="followers")
   
    