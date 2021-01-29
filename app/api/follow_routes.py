from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required
from app.config import Config
from app.models import Follow,User
from app.forms import NewFollow

follows_routes = Blueprint('likes', __name__)


@follows_routes.route('/<int:followerUser>/<int:follwedUser>', methods=["POST"])
def create_like(followerUser, follwedUser):
    existingFollow = Follow.query.filter(Follow.followingId==follwedUser, Follow.followerId==followerUser).first()
    if (not existingFollow):
        new_follow = Follow(followingId=followedUser, followerId=followerUser)
        db.session.add(new_follow)
        db.session.commit()
        return {message: "You have followed this user"
    else:
        db.session.delete(existingFollow)
        db.session.commit()
        return {"message": "You have unfollowed this user"}
    return {"message":"Uh-oh. There's something wrong here..."}