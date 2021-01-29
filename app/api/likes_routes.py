from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required
from app.config import Config
from app.models import Like
from app.forms.like_form import NewLike

likes_routes = Blueprint('likes', __name__)

@likes_routes.route('/<int:id>', methods=["GET"])
def get_recipes(id):
    likes = Like.query.filter(recipeId=id).all()
    return {"likes": [Like.to_dict() for like in Likes]}

@likes_routes.route('/<int:id>', methods=["POST"])
def create_like(id):
    form = NewLike()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_like = Like(userId=data["userId"], recipeId=id)
        db.session.add(new_like)
        db.session.commit()
        return "hello"
    return "Uh-oh. There's something wrong here..."
