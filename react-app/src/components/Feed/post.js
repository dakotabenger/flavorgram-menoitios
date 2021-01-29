import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from 'react-router-dom'
// import frenchtoast from "../../assets/frenchtoast.jpg";
// import chewtalk from "../../assets/chewytalk.jpg";
import * as recipeActions from '../../store/recipe'
const Post = ({ recipe, user, users, myUserId }) => {
  const [comment, setComment] = useState("");
  const [numLikes, setNumLikes] = useState(recipe.numLikes);
  const [likeUsers, setLikeUsers] = useState(recipe.likers);
  const [comments, setComments] = useState(recipe.comments);
  const dispatch = useDispatch

  const history = useHistory();
  // maps through comments and if <= 3, it will show all, if > than three, it hides all comments
  //  except 2 most recent.
  const commentGen = () => {
    return comments.length <= 3 ? (
      comments.map((c) => (
        <div key={`${recipe.id}-${c.id}`} className="feed-comment">
          <NavLink to={`users/${user.username}`}>
            <b>{user.username}</b>
          </NavLink>{" "}
          {c.comment}
        </div>
      ))
    ) : (
      <>
        <div className="feed-link">
          <NavLink className="more-comments" to={`/recipes/${recipe.id}`}>
            {`See ${comments.length - 2} more comments`}{" "}
          </NavLink>
        </div>
        <div className="feed-comment">
          <NavLink
            to={`/users/${
              recipe.comments[recipe.comments.length - 2].username
            }`}
          >
            <b>{recipe.comments[recipe.comments.length - 2].username}</b>
          </NavLink>
          {" " + recipe.comments[recipe.comments.length - 2].comment}
        </div>
        <div className="feed-comment">
          <NavLink
            to={`/users/${
              recipe.comments[recipe.comments.length - 1].username
            }`}
          >
            <b>{recipe.comments[recipe.comments.length - 1].username}</b>
          </NavLink>
          {" " + recipe.comments[recipe.comments.length - 1].comment}
        </div>
      </>
    );
  };

  const submitComment = async (e) => {
    e.preventDefault();
    if (comment.length === 0) return;
    let res = await fetch(`/api/comments/${recipe.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment, userId: myUserId, recipeId: recipe.id }),
    });
    res = await res.json();
    setComments(recipe.comments);
    setComment(res.comment);
  };

  const like = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/likes/${recipe.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: myUserId, recipeId: recipe.id }),
    });
    // res = await res.json();
    setNumLikes(numLikes +1);
    // setLikeUsers(res.likers);
  };
  return (
    <div className="post-main__container">
      <div className="one-post-container">
        <div className="post-user-info">
          <img
            className="post-profile-pic"
            src={user.avatarUrl}
            alt={`profile pic of ${user.username}`}
          />
          <div>
            <NavLink className="post-author-name" to={`/users/${user.username}`}>{user.username}</NavLink>
          </div>
        </div>
        <div className="feed-post-img-container">
          <img
            className="actual-image"
            src={recipe.photoUrl}
            alt={recipe.dish_name}
            onClick={(e) => {
              history.push(`/recipes/${recipe.id}`)}}
          />
        </div>
        <div className="post-bottom-info-container">
          <div className="post-comments-likes">
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
            <div className="post-text">
              <NavLink to={`/users/${user.username}`}>
                <b>{user.username}</b>
              </NavLink>{" "}
              {recipe.dish_name}
            </div>
          </div>
          {/*                               {commentGen()} */}
          <div className="post-comment-container"> {commentGen()} </div>
          <form className="comment-form" onSubmit={submitComment}>
            <textarea
              className="post-comment-field"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <input className="comment-submit" value="Comment" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
