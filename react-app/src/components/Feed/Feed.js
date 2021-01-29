import React, { useState, useEffect } from "react";
import Post from "./post";
import "./Feed.css";
import { authenticate } from "../../services/auth";
import { useSelector,useDispatch } from "react-redux";
import * as recipesActions from "../../store/recipes";


const Feed = () => {
  const [recipe, setRecipe] = useState([]);
  const [loaded, setLoaded] = useState(true); //set to false once logged in
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id)
  let recipes = useSelector((state) => state.session.recipes)
  useEffect(() => {
    (async () => {
      dispatch(recipesActions.addRecipes())
      // console.log(res)
 
    })();
  }, []);
  return (
    loaded && (
      <div className="post-container">
        {recipe.length ? (
          recipe.map((recipe) => (
            <Post
              key={recipe.id}
              recipe={recipe}
              user={recipe.user}
              // users={users}
              myUserId={userId}
            />
          ))
        ) : (
          <h2 className="no-recipe">No Recipes currently Uploaded!</h2>
        )}
      </div>
    )
  );
};

export default Feed;
