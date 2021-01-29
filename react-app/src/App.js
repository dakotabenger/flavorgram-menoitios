import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
import User from "./components/User";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import { authenticate } from "./services/auth";
import Profile from "./components/Profile";
import SearchedResults from "./components/SearchResults/SearchResults";
import ImageGen from "./components/ImagePost/ImageGen";
import Post from "./components/post";
import Feed from "./components/Feed/Feed";

import { restoreUser } from "./store/session";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userdata, setUserData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      // const user = await authenticate();
      dispatch(restoreUser());
      // if (!user.errors) {
      //   setAuthenticated(true);
      //   setUserData(user);
      // }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/search-results" exact={true}>
          <NavBar />
          <SearchedResults />
        </ProtectedRoute>
        <ProtectedRoute path={`/users/:username`} exact={true}>
          <NavBar />
          <Profile userdata={userdata} />
          {/* <UsersList/> */}
        </ProtectedRoute>

        <ProtectedRoute path="/recipes/new" exact={true}>
          <NavBar userdata={userdata} />
          <ImageGen />
        </ProtectedRoute>
        <ProtectedRoute path="/create_recipe" exact={true}>
          <NavBar />
          <CreateRecipe />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/recipes/:recipeId' exact={true}>
          <NavBar />
          <Post />
        </ProtectedRoute>

        <ProtectedRoute path="/" exact={true}>
          <NavBar userdata={userdata} />
          <Feed />
        </ProtectedRoute>
        <ProtectedRoute
          path="/"
          exact={true}
          // authenticated={authenticated}
        >
          <NavBar userdata={userdata} />
          <Post />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
