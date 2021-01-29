from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required
from app.config import Config
from app.models import Comment
from app.forms.comment_form import NewComment

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/<int:id>', methods=["GET"])
def get_comments(id):
    comments = Comment.query.filter(recipeId=id).all()
    return {"comments": [comments.to_dict() for comment in comments]}

@comment_routes.route('/<int:id>', methods=["POST"])
def create_comment(id):
    form = NewComment()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    print(f'HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE {data["userId"]},{data["comment"]},{id}')
    if form.validate_on_submit():

        new_comment = Comment(userId=data["userId"],
                            comment=data["comment"],
                            recipeId=id)
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return  "Uh-oh. There's something wrong here..."
