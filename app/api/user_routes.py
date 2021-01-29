import boto3
import os
from flask import Blueprint, jsonify

from flask_login import login_required, current_user
from app.models import User, Recipe
from ..models.db import db


user_routes = Blueprint('users', __name__)

s3 = boto3.client('s3',
                    aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
                    aws_secret_access_key=os.environ.get('AWS_SECRET_KEY')
                    )
BUCKET_NAME = 'flavorgram-gp'

#AWS s3 HELPER

def spaceRemover(filename):
    list_filename = filename.split(' ')
    return '+'.join(list_filename)

def upload_file_to_s3(file, userId, bucket_name, acl="public-read"):
    s3.upload_fileobj(
        file,
        bucket_name,
        file.filename,
        ExtraArgs={
            "ACL": acl,
            "ContentType": file.content_type
        }
    )

    return "{}{}".format(app.config["S3_LOCATION"], spaceRemover(file.filename))

# @recipe_routes.route('/create_recipe', methods=["POST"])
# def create_post():
#     file = request.files['file']
#     # dish_name = request.form.get('dish_name')
#     form = NewRecipe()
#     print(form.data)
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if "file" not in request.files:
#         return "No file key in request.files"
#     elif file:
#         photo_url = upload_file_to_s3(file, current_user.get_id(), BUCKET_NAME)
#         try:
#             new_recipe = Recipe(userId=data["userId"],
#                                 dish_name=data["dish_name"],
#                                 ingredients=data["ingredients"],
#                                 instructions=data["instructions"],
#                                 photoUrl=data["photoUrl"])

#         db.session.add(new_recipe)
#         db.session.commit()
#         return new_recipe.to_dict()
#         # except AssertionError as message:
#         #     return jsonify({"error": str(message)}), 400
#     else:
#         print("Uh-oh. There's something wrong here...")


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_profile_dict()


@user_routes.route("/<username>", methods=["GET"])
@login_required
def userParam(username):
    user = User.query.filter_by(username=f'{username}').first()
    # print(f'----------this is the return of filtering: {user.to_profile_dict()}-----------')
    return user.to_profile_dict()
