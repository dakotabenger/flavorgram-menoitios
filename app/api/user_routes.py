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


