import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import session from './session'
import search from './search'
import thunk from 'redux-thunk';
import recipe from './recipe'
import recipes from './recipes'

const rootReducer = combineReducers({
    session: session,
    search: search,
    recipe: recipe,
    recipes: recipes
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
  }

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
