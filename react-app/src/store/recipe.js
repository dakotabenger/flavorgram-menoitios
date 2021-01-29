import { fetch } from './csrf.js';

//keys
const FIND_RECIPE = 'recipe/findRecipe'

//action to set searched recipes
const setRecipe = (recipe) => ({
    type:FIND_RECIPE,
    recipe: recipe
})

//thunk to fetch searched recipes then dispatch setRecipe action
export const addRecipe = (recipeId) => async (dispatch) => {
    let res = await fetch(`/api/recipes/${recipeId}`);
    dispatch(setRecipe(res.data))
    return res
}

function reducer(state = {results: null}, action){
    let newState;
    switch(action.type){
        case FIND_RECIPE:
            newState = Object.assign({}, state, {results: action.recipe});
            return newState;
        default:
            return state;
    }
}

export default reducer;
