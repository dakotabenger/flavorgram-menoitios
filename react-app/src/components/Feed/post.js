import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import * as recipeActions from "../../store/recipe";
const Post = ({ recipe, user, users, myUserId }) => {
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(recipe.numLikes);
  const [likeUsers, setLikeUsers] = useState(recipe.likers);
  const [comments, setComments] = useState(recipe.comments);
  const [remove, setRemove] = useState(false);
  // const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch;

  const history = useHistory();

  // maps through comments and if <= 3, it will show all, if > than three, it hides all comments
  //  except 2 most recent.
  const commentGen = () => {
    return comments.length <= 3 ? (
      comments.map((comment) => (
        <div key={`${recipe.id}-${comment.id}`} className="feed-comment">
          <NavLink
            className="comment-username"
            to={`users/${comment.username}`}
          >
            <img
              className="comment-profile-pic"
              alt="user avatar"
              src={comment.usersAvatar}
            />
            <b>{comment.username}</b>
          </NavLink>{" "}
          {comment.comment}
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
            className="comment-username"
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
            className="comment-username"
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
    // e.preventDefault();
    // if (comment.length === 0) return;
    // let res = await fetch(`/api/comments/${recipe.id}`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ comment, userId: myUserId, recipeId: recipe.id }),
    // });
    // res = await res.json();
    // setComments(recipe.comments);
    // setComment(res.comment);
    if (comment.length === 0) return;
    let res = await fetch(`/api/comments/${recipe.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: comment,
        userId: myUserId,
        recipeId: recipe.id,
      }),
    });
    res = await res.json();
    setComments([...comments, res]);
    // console.log(comments,"HEEEEEEEEEEEEEEEEEEEEEEEJJJJSDJFFJIDEIJF")
    setComment("You're comment was posted!");
    setTimeout(() => {
      setComment("");
    }, 3000);
  };

  const like = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/likes/${recipe.id}/${user.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: myUserId, recipeId: recipe.id }),
    });
    res = await res.json();
    setNumLikes(res.numLikes);
    // setLikeUsers(res.likers);
  };

  const deletePost = async () => {
    let res = await fetch(
      `api/recipes/delete_recipe/${recipe.id}/${myUserId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: myUserId, recipeId: recipe.id }),
      }
    );
  };

  const deleteButton = (recipeId) => {
    return recipe.userId === myUserId ? (
      <i
        className="fal fa-trash-alt"
        onClick={(e) => deletePost(e, recipeId)}
      ></i>
    ) : (
      <></>
    );
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
            <NavLink
              className="post-author-name"
              to={`/users/${user.username}`}
            >
              {user.username}
            </NavLink>
          </div>
          <div className="delete-button hide">{deleteButton()}</div>
        </div>
        <div className="feed-post-img-container">
          <img
            className="actual-image"
            src={recipe.photoUrl}
            alt={recipe.dish_name}
            onClick={(e) => {
              history.push(`/recipes/${recipe.id}`);
            }}
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
              <NavLink className="post-username" to={`/users/${user.username}`}>
                <b className="comment__name">{user.username}</b>
              </NavLink>{" "}
              {recipe.dish_name}
            </div>
          </div>

          <h1 className="comments-title">Comments:</h1>

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
