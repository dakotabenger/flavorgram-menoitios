import { fetch } from "./csrf.js";

//keys
const SET_SEARCH_RESULTS = "searched/findRecipe";
const REMOVE_SEARCH_RESULTS = "searched/removeRecipe";
//action to set searched recipes
const setSearchResults = (searchResults) => ({
  type: SET_SEARCH_RESULTS,
  payload: searchResults,
});

export const removeSearchResults = () => {
  return {
    type: REMOVE_SEARCH_RESULTS,
  };
};

//thunk to fetch searched recipes then dispatch setRecipe action
// export const getSearchResults = (term) => async (dispatch) => {
//   // console.log(searchedRecipe)
//   const res = await fetch(`api/recipes/searched/${term}`);
//   dispatch(setRecipe(res.data));
//   return res;
// };

export const getSearchResults = (term) => async (dispatch) => {
  const res = await fetch(`/api/recipes/searched/${term}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ term }),
  });

  const searchResults = res.data;
  dispatch(setSearchResults({ ...searchResults, term }));
};

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        term: action.payload.term,
      };
    case REMOVE_SEARCH_RESULTS:
      return { ...state, term: "" };
    default:
      return state;
  }
};
export default searchReducer;
