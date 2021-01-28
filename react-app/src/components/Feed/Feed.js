import React, { useState, useEffect } from "react";
import Post from "./post";
import "./Feed.css";
import { authenticate } from "../../services/auth";
import { useSelector } from "react-redux";

const Feed = () => {
  const [recipe, setRecipe] = useState([]);
  const [loaded, setLoaded] = useState(true); //set to false once logged in
  const [users, setUsers] = useState({});
  const [myUserId, setMyUserId] = useState(null);

  const userId = useSelector((state) => state.session.user.id)

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/recipes/feed");
      res = await res.json();
      // console.log(res)
      setRecipe(res.recipes);
      setUsers(res.user);
      setLoaded(true);
      setMyUserId(userId);
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
              user={recipe.user}
              // users={users}
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
