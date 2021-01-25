from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Recipe
from ..models.db import db
user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<username>")
@login_required
def userParam(username):
    user = User.query.filter(username=username).first()

    userProfile = user.to_profile_dict()
    return userProfile


