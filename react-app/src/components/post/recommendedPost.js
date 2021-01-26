import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const RecommendedPost = ({ usepost }) => {
  const overlay = useRef(null);
  const history = useHistory();
  return (
    <div
      className="one-user-post"
      onMouseOver={(e) => (overlay.current.style.display = "flex")}
      onMouseLeave={(e) => (overlay.current.style.display = "none")}
      onClick={(e) => history.push(`/posts/${usepost.id}`)}
    >
      <div className="post-img-holder">
        <img alt="User Post" src={usepost.photoUrl} />
      </div>
      <div ref={overlay} className="post-overlay">
        <div className="overlay-likes">
          <i className="far fa-heart"></i>
          {usepost.numLikes}
        </div>
        <div className="overlay-comments">
          <i className="far fa-comment"></i>
          {usepost.numComments}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPost;
