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
                        dish_name="Carne Asada",
                        ingredients="2 lbs Flank or skirt steak\
                                        1 Orange juiced (1/4 cup)\
                                        2 Limes juiced (1/4 cup)\
                                        2 tbsp  Oil (olive or vegetable), plus more for grill\
                                        8 Garlic cloves, minced (2 tbsp)\
                                        2 tsp Oregano\
                                        2 tsp Chilli powder\
                                        2 tsp Kosher salt, plus more for steak\
                                        2 tsp Cumin\
                                        1 tsp Freshly ground pepper, plus more for steak\
                                        1/4 tsp Cayenne pepper",
                        instructions='Whisk the orange juice, lime juice, olive oil, garlic, oregano, chili powder, salt, cumin, pepper and cayenne in a small bowl.\
                                    Place the steak in a 9x13 baking dish or gallon size ziplock bag and cover it with the marinade until fully coated. Refrigerate for 1 to 4 hours.\
                                    Preheat the grill medium-high heat (400-450°F).\
                                    Discard the extra marinade and season steak with salt and pepper.\
                                    Grill the steaks for 5-8 minutes per side, depending on the thickness. (should we add something here about what temp to cook it to?)\
                                    Remove steaks and allow to rest for 5 minutes. Slice thinly against the grain and serve.\
                                    RARE 125° F 52 ° C\
                                    MEDIUM RARE 135° F 57 ° C\
                                    MEDIUM 145° F 63 ° C\
                                    MEDIUM WELL 150° F 66 ° C\
                                    WELL DONE 160° F 71 ° C',
                        photoUrl=f"https://images.themodernproper.com/billowy-turkey/production/posts/2020/Carne-Asada-7.jpg?w=667&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1603459979&s=54f1bd255bb26a745a8bf6efa75588b1",
                        )
    seed_post6 = Recipe(userId=5,
                        dish_name="Freezer Chicken Fajitas",
                        ingredients="2 lbs Boneless skinless chicken breasts, cut into thin slices\
                                    1/4 cup Taco seasoning\
                                    1 tbsp Olive oil\
                                    2 tbsp Lime juice\
                                    1 Red bell pepper, sliced thin\
                                    1 Yellow bell pepper, sliced thin\
                                    1 Green bell pepper, sliced thin\
                                    Small flour tortillas, for serving\
                                    Avocado, for serving\
                                    Cilantro, for serving\
                                    Salsa or hot sauce, for serving\
                                    Sour cream, for serving",
                        instructions='In a large bowl, mix the taco seasoning, olive oil, and lime juice to make your fajita marinade.\
                                    Toss the sliced chicken breast and sliced bell peppers in the marinade until everything is evenly coated.\
                                    To freeze the fajita mix: place the chicken in the bottom of a gallon sized ziplock bag followed by the vegetables. Seal the ziplock bag, squeezing out as much of the air as you can as you do so. Flatten out the bag for easier storage. Name and date your meal and place in the freezer until ready to cook.\
                                    The day before you’d like to cook the fajitas, move the bag of fajita mix to the fridge to thaw.\
                                    To cook the chicken fajitas: \
                                    Preheat the oven to 400°F.\
                                    Spread the defrosted homemade fajita mix out on a rimmed baking sheet and bake for 20 minutes. If you want to add some char to the meat and veggies, broil for another 3-5 minutes.\
                                    Serve with warm tortillas, salsa, guacamole, avocado, sour cream and fresh cilantro.',
                        photoUrl=f"https://images.themodernproper.com/billowy-turkey/production/posts/2020/Freezer-Chicken-Fajitas-8.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599768928&s=3d21edb93ff150e45540ce4f513dc30a",
                        )
    seed_post7 = Recipe(userId=6,
                        dish_name="Chicken Piccata",
                        ingredients="2 lbs Chicken cutlets, tenders or chicken breasts (halved horizontally)\
                                    2 ½ tsp Salt, divided\
                                    ½ tsp Pepper\
                                    1 cup Flour for dredging\
                                    10 tbsp Butter, cut into pieces, divided\
                                    4 tbsp Olive oil, divided\
                                    1 Shallot, minced\
                                    1 tbsp Garlic, minced\
                                    1 1/2 cups Chicken stock\
                                    1 Lemon juiced (1 tbsp)\
                                    2 tsp Lemon zest\
                                    2 tbsp Capers, drained\
                                    Parsley, chopped, for garnish (optional)",
                        instructions='1. Season the chicken with 2 teaspoons salt and pepper on both sides. Place the flour on a plate. Dredge the chicken in the flour and shake off any excess. Discard the flour when finished dredging.\
\
                                        2. Heat 3 tablespoons butter and 2 tablespoons oil in a large skillet set over medium-high until the butter has melted.\
\
                                        3. Working in batches, taking care not to crowd the pan, add ½ the chicken and sauté until golden brown, about 2 ½ - 3 minutes per side, until cooked through. Set the chicken aside on a plate when they finish cooking.\
\
                                        4. Add 3 more tablespoons of butter and 2 more tablespoons of olive oil and finish cooking the 2nd batch of chicken.\
\
                                        5. Add the shallot to the pan drippings and sauté until soft and fragrant, about 1 minute. Add garlic and saute for 1 minute longer.\
\
                                        6. Add the stock and simmer until reduced by half, about 4-5 minutes.\
\
                                        7. Reduce heat to low, then stir in the remaining 4 tablespoons butter, capers, lemon juice, and zest to taste. Season with remaining ½ teaspoon of salt. Garnish with parsley if using.\
\
                                        8. Serve the chicken with the piccata sauce poured over the top of the pan-fried chicken, alongside your favorite pasta or salad.',
                        photoUrl=f"https://images.themodernproper.com/billowy-turkey/production/posts/2019/Chicken-Picatta-8.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599767276&s=2aa0bf00be2c34de44c1fb93a32ca68f",
                        )
    seed_post8 = Recipe(userId=9,
                        dish_name="Five Spice Chicken Sheet Pan Dinner",
                        ingredients="4 lbs Bone in skin on chicken thighs\
                                    1 Head of cabbage, cut into 1\" wedges\
                                    3 Large carrots, peeled and cut into 2\" pieces\
                                    1 tbsp Soy sauce (or tamari)\
                                    1 tbsp Five spice powder\
                                    2 tbsp Honey\
                                    1 tsp Garlic\
                                    1/4 cup + 2tbsp Olive oil\
                                    Red pepper flakes for finishing\
                                    Green onions for finishing",
                        instructions='Preheat oven to 425°.\
                                    On a large skillet arrange cabbage and carrots and drizzle with 2 tbsp olive oil and salt with 1 tsp sea salt.\
                                    In a small bowl mix together soy sauce, honey, 5 spice powder, garlic and ¼ cup of olive oil. In a large bowl toss chicken along with 5 spice marinade until coated.\
                                    Bake for 35 minutes, for crispier cabbage remove chicken and roast vegetables for an additional 10 minutes.\
                                    Top with red pepper flakes and sliced scallions. Enjoy!',
                        photoUrl=f"https://images.themodernproper.com/billowy-turkey/production/posts/2019/five-spice-sheet-pan-dinner-with-cabbage-and-carrots-10.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599767606&s=f9d99ca5b72c1d1e7d9934a32381e577",
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
