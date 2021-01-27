import React, { useState } from "react";
import { useHistory } from "react";
import frenchtoast from "../../assets/frenchtoast.jpg";
import chewtalk from "../../assets/chewytalk.jpg";

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
          <div className="post-author-name">
            <NavLink to={`/users/${user.username}`}>{user.username}</NavLink>
          </div>
        </div>
        <div className="feed-post-img-container">
          <img src={frenchtoast} />
        </div>
        <div className="post-bottom-info-container">
          <i className="far fa-heart"></i>
          <div className="post-likes"></div>
          <div className="post-text">
            <b>UserName</b>
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
