import React, { useState, useEffect } from "react";
import { authenticate } from "../../services/auth";
import { useParams, NavLink } from "react-router-dom";
import RecommendedPost from "./recommenedPost";
import "./post.css";

const Post = () => {
  const { recipeId } = useParams();
  const [comments, setComments] = useState([]);
  const [img, setImg] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [dishName, setDishName] = useState("");
  const [users, setUsers] = useState({});
  const [poster, setPoster] = useState(0);
  const [newComent, setNewComment] = useState("");
  const [likeUsers, setLikeUsers] = useState([]);
  const [numLikes, setNumLikes] = useState(0);
  const [myUserId, setMyUserId] = useState(null);
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const [canFollow, setCanFollow] = useState(true);

  useEffect(() => {
    (async () => {
      setLoaded(false);
      let res = await fetch(`/api/posts/${recipeId}`);
      res = await res.json();
      setUsers(res.users);
      setImg(res.recipe.photoUrl);
      setComments([
        { userId: res.recipe.userId, comment: res.recipe.dishName },
        ...res.post.comments,
      ]);
      setDescription(res.recipe.dishName);
      setPoster(res.recipe.userId);
      setLikeUsers(res.recipe.likers);
      setNumLikes(res.recipe.numLikes);
      setMyUserId((await authenticate()).id);
      setRecomendedPosts(res.recomended);
      setCanFollow(res.canFollow);
      setLoaded(true);
    })();
  }, [recipeId]);

  const submitComent = async (e) => {
    e.preventDefault();
    if (newComent.length === 0) return;
    let res = await fetch(`/api/posts/${recipeId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: newComent }),
    });
    res = await res.json();
    setComments([
      { userId: res.userId, comment: res.dishName },
      ...res.comments,
    ]);
    setNewComment("");
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
    let res = await fetch(`/api/posts/${recipeId}/likes`, {
      method: "POST",
    });
    res = await res.json();
    setNumLikes(res.numLikes);
    setLikeUsers(res.likers);
  };

  return (
    loaded && (
      <div className="post-wraper">
        <div className="post-holder">
          <div className="post-img-holder">
            <img alt={dishName} src={img} />
          </div>
          <div className="post-info-holder">
            <div className="poster-info">
              <img alt="user avatar" src={users[poster].avatarUrl} />
              <div className="post-user-name">
                <NavLink to={`/users/${users[poster].username}`}>
                  {users[poster].username}
                </NavLink>
              </div>
              {canFollow ? (
                <div onClick={follow} className="post-follow-link">
                  Follow
                </div>
              ) : null}
            </div>
            <div className="post-comments-holder">
              {comments.map((c) => (
                <div key={c.id} className="post-comment">
                  <img alt="user avatar" src={users[c.userId].avatarUrl} />
                  <div className="post-comment-text">
                    <NavLink to={`/users/${users[c.userId].username}`}>
                      <b>{users[c.userId].username}</b>
                    </NavLink>{" "}
                    {c.comment}
                  </div>
                </div>
              ))}
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
              <form onSubmit={submitComent}>
                <textarea
                  value={newComent}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="New Comment"
                />
                <input value="Post Comment" type="submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="recommended-post-holder">
          {recommendedPosts.map((r, idx) => (
            <RecommendedPost key={`rec-${idx}`} rec={r} />
          ))}
        </div>
      </div>
    )
  );
};

export default Post;
