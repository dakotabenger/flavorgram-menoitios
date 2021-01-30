import React from "react";
import { useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";

const SearchResults = () => {
  const results = useSelector((state) => state.search.results);
  const history = useHistory();

  let recipes = <h1>Sorry No Recipes Match That Query</h1>;
  if (results) {
    if (results.recipes.length > 0) {
      const resultRecipes = results.recipes;
      recipes = resultRecipes.map((recipe) => {
        return (
          <div className="post-main__container">
            <div className="one-post-container">
            <div className="post-user-info">
          <img
            className="post-profile-pic"
            src={recipe.user.avatarUrl}
            alt={`profile pic of ${recipe.user.username}`}
          />
          <div>
            <NavLink
              className="post-author-name"
              to={`/users/${recipe.user.username}`}
            >
              {recipe.user.username}
            </NavLink>
          </div>
          </div>
              <h2 className="container__title">{recipe.dish_name}</h2>
              <div className="feed-post-img-container">
          <img
            className="actual-image"
            src={recipe.photoUrl}
            alt={recipe.dish_name}
            onClick={(e) => {
              history.push(`/recipes/${recipe.id}`);
            }}
          />
        </div>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div>
      <div>{recipes}</div>
    </div>
  );
};

export default SearchResults;
