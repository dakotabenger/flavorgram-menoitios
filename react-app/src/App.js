import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import { authenticate } from "./services/auth";
import Profile from "./components/Profile";
import SearchedResults from "./components/SearchResults/SearchResults";
import ImageGen from "./components/ImagePost/ImageGen";
import Post from "./components/post";
import Feed from "./components/Feed/Feed";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userdata, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setUserData(user);
      }
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
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setUserData={setUserData}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/search-results" exact={true}>
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <SearchedResults />
        </Route>
        <ProtectedRoute
          path={`/users/:username`}
          exact={true}
          authenticated={authenticated}
        >
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <Profile userdata={userdata} />
          {/* <UsersList/> */}
        </ProtectedRoute>

        <ProtectedRoute
          path="/new/post"
          exact={true}
          authenticated={authenticated}
        >
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <Post />
        </ProtectedRoute>
        <Route path="/create_recipe" exact={true}>
          <CreateRecipe />
        </Route>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <Feed />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
