from .db import db
# from .like import Like
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from datetime import datetime
from .follow import Follow



class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  bio = db.Column(db.String(255))
  avatarUrl = db.Column(db.String(255))
  hashed_password = db.Column(db.String(255), nullable = False)
  followerId = db.Column(db.Integer,unique = True)

  followers = db.relationship("Follow", secondary=Follow, primaryjoin=id==Follow.followingId, secondaryjoin=id==Follow.followerId, back_populates="following")
  following = db.relationship("Follow", secondary=Follow, primaryjoin=id==Follow.followerId, secondaryjoin=id==Follow.followingId, back_populates="followers")
  recipe = relationship("Recipe")
  # likedPosts = relationship("Like", back_populates="likingUsers")

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "bio": self.bio,
      "avatarUrl": self.avatarUrl
    }

  def follower_name(self):
    return self.username


  def to_profile_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "bio": self.bio,
      "avatarUrl": self.avatarUrl,
      "numFollowers": len(self.followers),
      "numFollowing": len(self.following),
      "followers": [follower.to_dict() for follower in self.followers],
      "following": [user.to_dict() for user in self.following],
      # "followingUserNames": [user.follower_names() for user in self.following],
      "recipes": [recipe.to_simple_dict() for recipe in self.recipe]
    }

  def to_simple_dict(self):
    return {
      "username": self.username,
      "avatarUrl": self.avatarUrl,
    }
