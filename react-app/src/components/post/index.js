import React, { useState, useEffect } from "react";
import { authenticate } from "../../services/auth";
import { useParams, NavLink } from "react-router-dom";
import RecommendedPost from "./recommendedPost";
import { useDispatch, useSelector } from "react-redux";
import "./post.css";
import * as recipeActions from "../../store/recipe";
import * as recipesActions from "../../store/recipes";

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
  const dispatch = useDispatch();
  const currUsesr = useSelector((state) => state.session.user.id);

  useEffect(() => {
    (async () => {
      setLoaded(false);
      let res = await fetch(`/api/recipes/${recipeId}`);
      res = await res.json();
      console.log(res);
      dispatch(recipeActions.setRecipe(res.recipe));
      setUsers(res.recipe.user);
      setImg(res.recipe.photoUrl);
      setComments(res.recipe.comments);
      console.log(res.recipe.comments);
      // console.log("COMMMENTTSSSSSSSSSS", comments)
      setDishName(res.recipe.dish_name);
      setPoster(res.recipe.user.id);
      setLikeUsers(res.recipe.likers);
      setNumLikes(res.recipe.numLikes);
      setIngredients(res.recipe.ingredients);
      setInstructions(res.recipe.instructions);
      setComments(res.recipe.comments);
      setMyUserId(currUsesr);
      // setRecommendedPosts(res.recommended);
      // setCanFollow(res.canFollow);
      dispatch(recipesActions.addRecipes());
      setLoaded(true);
    })();
  }, []);

  const submitComment = async (e) => {
    e.preventDefault();
    if (newComment.length === 0) return;
    let res = await fetch(`/api/comments/${recipeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: newComment,
        userId: myUserId,
        recipeId: recipeId,
      }),
    });
    res = await res.json();
    setComments([...comments, res]);
    console.log(comments, "HEEEEEEEEEEEEEEEEEEEEEEEJJJJSDJFFJIDEIJF");
    setNewComment("You're comment was posted!");
    setTimeout(() => {
      setNewComment("");
    }, 3000);

    // expects response to have userID, comment(and associated dishName)
    // also all comments under recipe
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

  const like = async (recipeId, userId) => {
    console.log(recipeId, userId, "HEREEEEEEEEEEEEEEEEE");
    let res = await fetch(`/api/likes/${recipeId}/${userId}`, {
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
            <div className="actual-img">
              <img alt={dishName} src={img} />
            </div>
            <div className="post-recipe">
              <h1 className="dishname">{dishName}</h1>
              <h2 className="list-title">List of Ingredients:</h2>
              <h3 className="list">{ingredients}</h3>
              <h2 className="instructions-title">Instructions:</h2>
              <h3 className="instructions-actual">{instructions}</h3>
            </div>
          </div>
          <div className="post-info-holder">
            <div className="poster-info">
              <img
                className="user-avatar"
                alt="user avatar"
                src={users.avatarUrl}
              />
              <div className="post-user-name">
                <NavLink
                  className="post-user-name-name"
                  to={`/users/${users.username}`}
                >
                  {users.username}
                </NavLink>
              </div>
            </div>
            <div className="post-comments-holder">
              {comments.map((comment) => {
                return (
                  <div key={comment.id} className="post-comment">
                    <img
                      className="img-comment"
                      alt="user avatar"
                      src={comment.usersAvatar}
                    />
                    <div className="post-comment-text">
                      <NavLink
                        className="comment-username"
                        to={`/users/${comment.username}`}
                      >
                        <b>{comment.username}</b>
                      </NavLink>{" "}
                      {comment.comment}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="post-comment-submit">
              <i
                onClick={(e) => {
                  like(recipeId, poster);
                }}
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
