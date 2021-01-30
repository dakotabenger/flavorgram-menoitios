import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const RecommendedPost = ({ usepost }) => {
  const overlay = useRef(null);
  const history = useHistory();
  return (
    <div className="grid-wrapper">
      <div
        className="just-one"
        onClick={(e) => history.push(`/recipes/${usepost.id}`)}
        >
        <div className="profile-images">
          <img className="actual-picture" alt="User Post" src={usepost.photoUrl} />
          <div ref={overlay} className="profile-images-overlay">
            <div className="overlay-likes">
              <i className="far fa-heart"></i>
              {usepost.numLikes}
            </div>
            <div className="overlay-comments">
              <i className="far fa-comment"></i>
              {usepost.numComments}
            </div>
            <div className="overlay-comments">
              {usepost.dish_name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedPost;
