import boto3
import os
from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required, current_user
from app.config import Config
from app.models import Recipe, User, Comment
from app.forms import NewRecipe

recipe_routes = Blueprint('recipes', __name__)
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


@recipe_routes.route('/feed', methods=["GET"])
def get_recipes():
    recipes = Recipe.query.all()
    return {"recipes": [recipe.to_dict() for recipe in recipes]}

@recipe_routes.route('/<int:recipeId>', methods=["GET"])
def get_recipe(recipeId):

    recipes = Recipe.query.get(recipeId)
    return {"recipe": recipes.to_dict()}

@recipe_routes.route('/delete_recipe/<int:recipeId>/<int:userId>', methods=["POST"])
def delete_recipe(recipeId, userId):

    validRecipe = Recipe.query.filter(Recipe.id==recipeId, Recipe.userId==userId).first()
    if(validRecipe):
        currRecipe = validRecipe.to_dict()
        recipeComments = currRecipe['comments']
        for comment in recipeComments:
            currComment = Comment.query.filter(Comment.id==comment['id']).first()
            db.session.delete(currComment)
            db.session.commit()

        db.session.delete(validRecipe)
        db.session.commit()

        recipes = Recipe.query.all()
        return {"recipes": [recipe.to_dict() for recipe in recipes]}
    else:
        return {'message':'Uh-oh something went wrong...'}


@recipe_routes.route('/create_recipe', methods=["POST"])
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
#--------original create recipe-------------------------
def create_recipe():
    form = NewRecipe()
    print(form.data)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_recipe = Recipe(userId=data["userId"],
                            dish_name=data["dish_name"],
                            ingredients=data["ingredients"],
                            instructions=data["instructions"],
                            photoUrl=data["photoUrl"])
        db.session.add(new_recipe)
        db.session.commit()
        return new_recipe.to_dict()
    return "Uh-oh. There's something wrong here..."


@recipe_routes.route('searched/<keyword>', methods=['GET'])
def searched(keyword):
    recipes = Recipe.query.filter(Recipe.dish_name.ilike(f'%{keyword}%')).all()
    print([recipe.to_dict() for recipe in recipes])
    return {"recipes": [recipe.to_dict() for recipe in recipes]}
