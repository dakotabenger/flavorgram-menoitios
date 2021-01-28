import React, { useState, useEffect } from "react";
import { authenticate } from "../../services/auth";
import { useParams, NavLink } from "react-router-dom";
import RecommendedPost from "./recommendedPost";
import { useSelector } from "react-redux";
import "./post.css";

const Post = () => {
  const { recipeId } = useParams();
  const [comments, setComments] = useState([]);
  const [img, setImg] = useState("");
  const [loaded, setLoaded] = useState(true);
  const [dishName, setDishName] = useState("");
  const [users, setUsers] = useState({});
  const [poster, setPoster] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [likeUsers, setLikeUsers] = useState([]);
  const [numLikes, setNumLikes] = useState(0);
  const [myUserId, setMyUserId] = useState(null);
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const [canFollow, setCanFollow] = useState(true);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const currUsesr = useSelector((state) => state.session.user.id)

  useEffect(() => {
    (async () => {
      setLoaded(true);
      let res = await fetch(`/api/recipes/${recipeId}`);
      res = await res.json();
      console.log(res)
      setUsers(res.recipe.user);
      setImg(res.recipe.photoUrl);
      setComments([
        { userId: res.recipe.userId, comment: res.recipe.dishName },
        ...res.recipe.comments,
      ]);
      setDishName(res.recipe.dish_name);
      setPoster(res.recipe.user.id);
      setLikeUsers(res.recipe.likers);
      setNumLikes(res.recipe.numLikes);
      setIngredients(res.recipe.ingredients);
      setInstructions(res.recipe.instructions);

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
    let res = await fetch(`/api/recipes/${recipeId}/likes`, {
      method: "POST",
    });
    //expects response to have a length of likers on res object
    //as well as individual user objects of who liked
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
