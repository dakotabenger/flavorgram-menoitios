import React, { useState, useEffect } from "react";
import { authenticate } from "../../services/auth";
import { useParams, NavLink } from "react-router-dom";
import RecommendedPost from "./recommendedPost";
import { useDispatch, useSelector } from "react-redux";
import "./post.css";
import * as recipeActions from "../../store/recipe";

const Post = () => {
  const { recipeId } = useParams();
  const [loaded, setLoaded] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [myUserId, setMyUserId] = useState(null);
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const [canFollow, setCanFollow] = useState(true);
  const dispatch = useDispatch()
  
  const currUsesr = useSelector((state) => state.session.user.id)
  let recipe = useSelector((state) => state.session.recipe)
  let users = useSelector((state) => state.session.recipe.userId)
  let img = useSelector((state) => state.session.recipe.photoUrl)
  let comments = useSelector((state) => state.session.recipe.comments)
  let dishName = useSelector((state) => state.session.recipe.dish_name)
  let poster = useSelector((state) => state.session.recipe.user.id);
  let likeUsers = useSelector((state) => state.session.recipe.likers);
  let numLikes = useSelector((state) => state.session.recipe.numLikes);
  let ingredients = useSelector((state) => state.session.recipe.ingredients);
  let instructions = useSelector((state) => state.session.recipe.instructions);
  
  
  useEffect(() => {
    (async () => {
      setLoaded(true);
      dispatch(recipeActions.addRecipe())
      

      setMyUserId(currUsesr);
      // setRecommendedPosts(res.recommended);
      // setCanFollow(res.canFollow);
      setLoaded(true);
    })();
  }, [recipeId]);

  const submitComment = async (e) => {
    e.preventDefault();
    if (newComment.length === 0) return;
    let res = await fetch(`/api/recipes/${recipeId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: newComment }),
    });
    // expects response to have userID, comment(and associated dishName)
    // also all comments under recipe

    res = await res.json();
    
  };

  const follow = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/users/${poster}/follower`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ followerId: myUserId }),
    });
    res = await res.json();
    setCanFollow(!res.added);
  };

  const like = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/recipes/${recipeId}/likes`, {
      method: "POST",
    });
    //expects response to have a length of likers on res object
    //as well as individual user objects of who liked
    res = await res.json();
    
  };

  return (
    loaded && (
      <div className="post-wraper">
        <div className="post-holder">
          <div className="post-img-holder">
            <img alt={dishName} src={img} />
            <div className="post-recipe">
              <h1>{dishName}</h1>
              <h2>List of Ingredients:</h2>
              <h3>{ingredients}</h3>
              <h2>Instructions:</h2>
              <h3>{instructions}</h3>
            </div>
          </div>
          <div className="post-info-holder">
            <div className="poster-info">
              <img alt="user avatar" src={users.avatarUrl}/>
              <div className="post-user-name">
                <NavLink className="post-user-name-name" to={`/users/${users.username}`}>
                  {users.username}
                </NavLink>
              </div>
              {canFollow ? (
                <div onClick={follow} className="post-follow-link">
                  Follow
                </div>
              ) : null}
            </div>
            <div className="post-comments-holder">
                        {/* {comments.map(c=><div key={c.id} className="post-comment">
                            <img alt="user avatar" src={users[c.userId].avatarUrl}/>
                            <div className="post-comment-text"><NavLink to={`/users/${users[c.userId].username}`}><b>{users[c.userId].username}</b></NavLink> {c.comment}</div>
                          </div>)} */}
            </div>
            <div className="post-comment-submit">
              <i
                onClick={like}
                className={
                  likeUsers.includes(myUserId)
                    ? "fas fa-heart fa-lg"
                    : "far fa-heart fa-lg"
                }
              ></i>
              <div className="post-likes">
                {numLikes} {numLikes !== 1 ? "likes" : "like"}{" "}
              </div>
              <form onSubmit={submitComment}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="New Comment"
                />
                <input value="Post Comment" type="submit" />
              </form>
            </div>
          </div>
        </div>
        {/* <div className="recommended-post-holder">
          {recommendedPosts.map((r, idx) => (
            <RecommendedPost key={`rec-${idx}`} rec={r} />
          ))}
        </div> */}
      </div>
    )

  );
};

export default Post;
