import React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components";

const SearchResults = () => {
    const results = useSelector((state) => state.search.results);

    let recipes = <h1>Sorry No Recipes Match That Query</h1>
    if (results){
        if(results.recipes.length > 0){
            const resultRecipes = results.recipes
            recipes = resultRecipes.map(recipe => {
                return <div key={recipe.id}>
                    <h2>{recipe.id}</h2>
                    <img src={`${recipe.photo_url}`}/>
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
