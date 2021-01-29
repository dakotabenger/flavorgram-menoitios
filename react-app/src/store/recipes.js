import { fetch } from './csrf.js';

//keys
const FIND_RECIPES = 'recipe/findRecipe'

//action to set searched recipes
const setRecipes = (recipes) => ({
    type:FIND_RECIPES,
    recipes: recipes
})

//thunk to fetch searched recipes then dispatch setRecipe action
export const addRecipes = () => async (dispatch) => {
    let res = await fetch("/api/recipes/feed");
    
    dispatch(setRecipes(res.data))
    console.log(res.data)
    return res
}

function reducer(state = {results: {recipes:[]}}, action){
    let newState;
    switch(action.type){
        case FIND_RECIPES:
            newState = Object.assign({}, state, {results: {...action.recipes}});
            return newState;
        default:
            return state;
    }
}

export default reducer;
