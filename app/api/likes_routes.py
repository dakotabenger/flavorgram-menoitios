from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required
from app.config import Config
from app.models import Like, Recipe

likes_routes = Blueprint('likes', __name__)



@likes_routes.route('/<int:recipeId>/<int:userId>', methods=["POST"])
def create_like(recipeId, userId):
    print(recipeId,userId,"HERREE")
    existingLike = Like.query.filter(Like.recipeId==recipeId, Like.userId==userId).first()
    if (not existingLike):
        new_like = Like(userId=userId, recipeId=recipeId)
        db.session.add(new_like)
        db.session.commit()
        new_data = Recipe.query.filter(Recipe.id==recipeId)
        return new_data.to_profile_dict()
    else:
        existingLike.delete()
        db.session.commit()
        new_data = Recipe.query.filter(Recipe.id==recipeId)
        return new_data.to_profile_dict()
    return "Uh-oh. There's something wrong here..."