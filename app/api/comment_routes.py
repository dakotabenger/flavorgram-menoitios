import boto3
import os
from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
load_dotenv
from ..models.db import db
from flask_login import login_required
from app.config import Config
from app.models import Recipe
from app.forms import NewRecipe

comment_routes = Blueprint('comments', __name__)