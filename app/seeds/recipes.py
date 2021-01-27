from app.models import db, Recipe
from datetime import datetime
import random


def seed_posts():
    seed_post1 = Recipe(userId=1,
                        dish_name="Dish Name",
                        ingredients="eggs",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post2 = Recipe(userId=1,
                        dish_name="Dishhy name",
                        ingredients="bagel",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post3 = Recipe(userId=1,
                        dish_name="Name le Dish",
                        ingredients="fish",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post4 = Recipe(userId=1,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )

    db.session.add(seed_post1)
    db.session.add(seed_post2)
    db.session.add(seed_post3)
    db.session.add(seed_post4)
    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()
