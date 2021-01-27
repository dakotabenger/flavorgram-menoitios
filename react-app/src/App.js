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
import SearchedResults from './components/SearchResults/SearchResults'

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
        <Route path='/search-results' exact={true}>
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
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
