import React, { useState, useEffect,useContext,useRef } from "react";
import Post from "./post";
import "./Feed.css";
import { authenticate } from "../../services/auth";
import { useSelector,useDispatch } from "react-redux";
import * as recipesActions from "../../store/recipes";
import * as recipeActions from "../../store/recipe"

const Feed = ({children}) => {
  const [loaded, setLoaded] = useState(false); //set to false once logged in
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id)
  let recipes = useSelector((state) => state.recipes.results.recipes)

  
    
  useEffect(() => {
    (async () => {
      console.log(await dispatch(recipesActions.addRecipes()))
      setLoaded(true)
      
    })();
  }, []);
  return (
    loaded && (
      <div className="post-container">
        {recipes.length ? (
          recipes.map((recipe) => (
            <>
            <Post
              key={recipe.id}
              recipe={recipe}
              user={recipe.user}
              users={users}
              myUserId={userId}
            />
            </>
          ))
            
        ) : (
          <h2 className="no-recipe">No Recipes currently Uploaded!</h2>
        )}
      </div>
    )
  );
};

export default Feed;
