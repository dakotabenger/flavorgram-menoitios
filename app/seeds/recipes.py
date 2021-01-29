from app.models import db, Recipe
from datetime import datetime
import random


def seed_posts():
    seed_post1 = Recipe(userId=8,
                        dish_name="Ranch Burger",
                        ingredients="2 lb ground beef\
                                    2 pkgs ranch dressing mix\
                                    1 package homemade dry onion soup mix\
                                    1/2 cup onion, finely chopped",
                        instructions='Mix the ingredients together in a large bowl and patty out into burgers. Place in the refrigerator for one hour.\
                                    Clean the grates well and spray with vegetable oil. Preheat the grill and cook the burgers according to your taste.',
                        photoUrl=f"https://www.misshomemade.com/images/ranchburgersE.jpg",
                        )
    seed_post2 = Recipe(userId=2,
                        dish_name="Salmon en Papillote",
                        ingredients="1.5lb salmon\
                                     1 small zucchini\
                                     1 head fennel\
                                     1 lemon\
                                     1 tsp dried dill\
                                     1 tbsp olive oil\
                                     1 tsp salt\
                                     1/2 tsp pepper",
                        instructions='Preheat oven to 375°F.\
                                    Cut parchment into 4 large ovals 15” by 10” inches. And fold in half.\
                                    On half of each parchment layer on ¼ of the zucchini, ¼ the fennel, 1 piece of salmon, sprinkle with ¼ tsp salt, ¼ pepper, ¼ tsp dill, lemon slices, drizzle with ¼ cup olive oil and a few pieces of fennel fronds. Repeat with the three remaining salmon fillets.\
                                    Close the parchment by folding the other half over the prepared salmon and carefully roll the open edges toward the center.\
                                    Set pouches on a baking sheet and bake on the center rack for 15 minutes.\
                                    Open carefully using a fork and serve.',
                        photoUrl=f"https://images.themodernproper.com/billowy-turkey/production/posts/2019/salmon-in-parchment-paper-15.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1603456262&s=4cbabb52ab81d957e0cc27b68a1d02e6",
                        )
    seed_post3 = Recipe(userId=1,
                        dish_name="Sesame Garlic Ramen Noodles",
                        ingredients="3 (3 oz) packages Instant ramen noodles, flavor packets discarded,\
                                    ¼ cup Low sodium soy sauce\
                                    ¼ cup Oyster sauce\
                                    1 tbsp Rice vinegar\
                                    1 tbsp Brown sugar, optional\
                                    ½ -1 tsp Chili sauce like sambal or sriracha\
                                    ¼ cup Water\
                                    2 tbsp Toasted sesame oil\
                                    4 Cloves garlic, minced about 2 tsp\
                                    1 tsp Freshly grated ginger\
                                    4-6 Green onions, thinly sliced\
                                    1 tsp Sesame seeds",
                        instructions='In a large pot of boiling water, cook ramen according to package, about 3-4 minutes; drain well.\
                                    In a small bowl, whisk together soy sauce, oyster sauce, rice vinegar, brown sugar, chili sauce and water.\
                                    Heat sesame oil in a large skillet set over medium heat.\
                                    Stir in garlic and ginger until fragrant, about 1 minute.\
                                    Pour in the bowl of sauce and simmer for 3-4 minutes. Stir in cooked ramen noodles until heated through and evenly coated in sauce, about 3 minutes.\
                                    Garnish with green onions and sesame seeds.',
                        photoUrl=f"https://images.themodernproper.com/billowy-turkey/production/posts/2020/Sesame-Garlic-Ramen-Noodles-15.jpg?w=595&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1600182904&s=d161637af60ff7841f9c8ae07618fe1b",
                        )
    seed_post4 = Recipe(userId=3,
                        dish_name="Hoisin Glazed Pork Chops",
                        ingredients="​4 Pork chops, boneless (about 2 lbs)\
                                    3/4 tsp Salt\
                                    2 tbsp Sesame oil\
                                    2 Garlic cloves, minced\
                                    2 tsp Ginger minced\
                                    ⅓ cup Hoisin sauce\
                                    2 tbsp Rice vinegar\
                                    2 tbsp Water",
                        instructions='In a small sauce pan set over medium heat, simmer the garlic, ginger, hoisin, rice vinegar and water, whisking occasionally until the mixture is fully combined, about 4 minutes. Set aside.\
                                    Lightly salt pork chops. Heat the sesame oil in a large skillet over high heat. Once oil is smoking, place the pork chops in the skillet, cook without turning until well browned, 4-6 minutes on each side (adjust timing based on how thick your pork chop is). When an instant-read thermometer inserted into the thickest part registers 135°F, remove the pork chops from the pan. Transfer to a cutting board and let rest 5 minutes.\
                                    Serve with hoisin sauce drizzled over top.',
                        photoUrl=f"https://images.themodernproper.com/billowy-turkey/production/posts/2019/hoisin-glazed-pork-chops-9.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1603458849&s=da1631023a519faa41cbc9f5eae9f180",
                        )
    seed_post5 = Recipe(userId=4,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post6 = Recipe(userId=5,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post7 = Recipe(userId=6,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post8 = Recipe(userId=9,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post9 = Recipe(userId=10,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post10 = Recipe(userId=11,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )
    seed_post11 = Recipe(userId=7,
                        dish_name="chip chip",
                        ingredients="cookies",
                        instructions='1) google',
                        photoUrl=f"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
                        )

    db.session.add(seed_post1)
    db.session.add(seed_post2)
    db.session.add(seed_post3)
    db.session.add(seed_post4)
    db.session.add(seed_post5)
    db.session.add(seed_post6)
    db.session.add(seed_post7)
    db.session.add(seed_post8)
    db.session.add(seed_post9)
    db.session.add(seed_post10)
    db.session.add(seed_post11)
    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()
