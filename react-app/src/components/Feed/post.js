import React, { useState } from "react";
import { useHistory, NavLink } from "react";
// import frenchtoast from "../../assets/frenchtoast.jpg";
// import chewtalk from "../../assets/chewytalk.jpg";

const Post = ({ recipe, user, users, myUserId }) => {
  const [comment, setComment] = useState("");
  const [numLikes, setNumLikes] = useState(recipe.numLikes);
  const [likeUsers, setLikeUsers] = useState(recipe.likers);
  const [comments, setComments] = useState(recipe.comments);

  const history = useHistory();

  const commentGen = () => {
    return comments.length <= 3 ? (
      comments.map((c) => (
        <div key={`${recipe.id}-${c.id}`} className="feed-comment">
          <NavLink to={`users/${users[c.userId].username}`}>
            <b>{users[c.userId].username}</b>
          </NavLink>{" "}
          {c.comment}
        </div>
      ))
    ) : (
     
  };

  const like = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/recipes/${recipe.id}/likes`, {
      method: "POST",
    });
    res = await res.json();
    setNumLikes(res.numLikes);
    setLikeUsers(res.likers);
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
          <div className="post-author-name">
            <NavLink to={`/users/${user.username}`}>{user.username}</NavLink>
          </div>
        </div>
        <div className="feed-post-img-container">
          <img
            src={recipe.photoUrl}
            alt={recipe.description}
            onClick={(e) => history.push(`/recipes/${recipe.id}`)}
          />
        </div>
        <div className="post-bottom-info-container">
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
            {recipe.description}
          </div>
          <div className="post-comment-container">Comments</div>
          <form className="comment-form">
            <textarea className="post-comment-field"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
