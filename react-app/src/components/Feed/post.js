import React from "react";
import frenchtoast from "../../assets/frenchtoast.jpg";
import chewtalk from "../../assets/chewytalk.jpg";
const Post = () => {
  return (
    <div className="post-main__container">
      <div className="one-post-container">
        <div className="post-user-info">
          <img className="post-profile-pic" src={chewtalk} />
          <div className="post-author-name">Chewy</div>
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
