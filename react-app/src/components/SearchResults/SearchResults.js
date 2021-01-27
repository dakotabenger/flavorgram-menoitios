import React from "react";
import { useSelector } from "react-redux"

const SearchResults = () => {
    const results = useSelector((state) => state.search.results);

    let recipes = <h1>Sorry No Recipes Match That Query</h1>
    if (results){
        if(results.recipes.length > 0){
            const resultRecipes = results.recipes
            recipes = resultRecipes.map(recipe => {
                return <div key={recipe.id}>
                    <h2>{recipe.dish_name}</h2>
                    <p>{recipe.instructions}</p>
                    <p>{recipe.ingredients}</p>
                    <img src={`${recipe.photoUrl}`}/>
                 </div>
            })
        }
    }
    return (
        <div>
            <div>
                {recipes}
            </div>
        </div>
    )
}

export default SearchResults
