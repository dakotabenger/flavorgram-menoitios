import React, { useState, useEffect } from "react";
import Post from "./post";
import "./Feed.css";
import { authenticate } from "../../services/auth";

const Feed = () => {
  const [recipe, setRecipe] = useState([]);
  const [loaded, setLoaded] = useState(true); //set to false once logged in
  const [users, setUsers] = useState({});
  const [myUserId, setMyUserId] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/recipes/");
      res = await res.json();
      setRecipe(res.Recipe);
      setUsers(res.users);
      setLoaded(true);
      setMyUserId((await authenticate()).id);
    })();
  }, []);
  return (
    loaded && (
      <div className="post-container">
        {recipe.length ? (
          recipe.map((recipe) => (
            <Post
              key={recipe.id}
              recipe={recipe}
              user={users[recipe.userId]}
              users={users}
              myUserId={myUserId}
            />
          ))
        ) : (
          <h2 className="no-recipe">No Recipes currently Uploaded!</h2>
        )}
      </div>
    )
  );
};

export default Feed;
