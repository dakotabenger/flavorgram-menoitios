import {fetch} from './csrf.js'

const ADD_POST = 'recipes/ADD_POST'

const addNewRecipe = recipe => ({
    type: ADD_POST,
    recipe,
  });

export const addRecipe = ({ dish_name, ingredients, instructions, photoUrl }) => async (dispatch) => {
    const res = await fetch('/api/recipes/create_recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dish_name,
            ingredients,
            instructions,
            photoUrl })
    });

    if(res.ok) {
        const recipe = await res.json()
        dispatch(addNewRecipe(recipe))
        return recipe
    }
}
