import {fetch} from './csrf.js'

const ADD_POST = 'recipes/ADD_POST'

const addNewRecipe = recipe => ({
    type: ADD_POST,
    payload: recipe,
  });

export const addRecipe = ({ dish_name, ingredients, instructions, photoUrl }) => async (dispatch) => {
    const res = await fetch('/api/create_recipe', {
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
    dispatch(addNewRecipe(res.data))
    return {type: ADD_POST, payload: res.data}
}


const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_POST:
      newState = Object.assign({}, state, { recipe: action.payload });
      return newState;
    default:
      return state;
    }
}

export default reducer;
