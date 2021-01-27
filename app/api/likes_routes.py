from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required
from app.config import Config
from app.models import Like
from app.forms import NewLike

likes_routes = Blueprint('likes', __name__)

@recipe_routes.route('/<int:id>', methods=["GET"])
def get_recipes(id):
    likes = Like.query.filter()
    return {"likes": [Like.to_dict() for like in Likes]}