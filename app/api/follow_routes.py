from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required
from app.config import Config
from app.models import Follow
from app.forms import NewFollow

follows_routes = Blueprint('likes', __name__)

@likes_routes.route('/<int:id>', methods=["GET"])
def get_recipes(id):
    follows = Follow.query.filter(followerId=id).all()
    return {"follows": [Follow.to_dict() for follow in follows]}

@likes_routes.route('/<int:id>', methods=["POST"])
def create_like(id):
    form = NewLike()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_like = Like(userId=data["userId"], recipeId=id)
        db.session.add(new_like)
        db.session.commit()
        return new_like.to_dict()
    return "Uh-oh. There's something wrong here..."