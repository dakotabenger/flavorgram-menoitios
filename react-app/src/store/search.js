import { fetch } from './csrf.js';

//keys
const FIND_RECIPE = 'searched/findRecipe'

//action to set searched recipes
const setRecipe = (recipes) => ({
    type:FIND_RECIPE,
    recipes: recipes
})

//thunk to fetch searched recipes then dispatch setRecipe action
export const search = (searchedRecipe) => async (dispatch) => {
    // console.log(searchedRecipe)
    const res = await fetch(`api/recipes/searched/${searchedRecipe}`)
    dispatch(setRecipe(res.data))
    return res
}

function reducer(state = {results: null}, action){
    let newState;
    switch(action.type){
        case FIND_RECIPE:
            newState = Object.assign({}, state, {results: action.recipes});
            return newState;
        default:
            return state;
    }
}

export default reducer;
