import { fetch } from './csrf.js';

//keys
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const LOGIN_USER = 'session/loginUser'

//action to set the user in session store
const setUser = (user) => ({
  type: SET_USER,
  payload: user
});


//action too remove user from session
const removeUser = () => ({
  type: REMOVE_USER
});


//thunk to fetch login route then dispatch setUser action to store
//user in session store
export const login = ({ email, password }) => async (dispatch) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });

    dispatch(setUser(res.data));
  return {type: SET_USER, payload: res.data};
};

export const restoreUser = () => async (dispatch) => {
  const res = await fetch('/api/auth/', {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(res.data && !res.data.errors){
    dispatch(setUser(res.data))
  }
    // dispatch(setUser(res.data));

  return res;
};


//change lines 45-47 with user object before destructure?
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    })
  });

  dispatch(setUser(response.data));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
    default:
      return state;
  }
}

export default reducer;
