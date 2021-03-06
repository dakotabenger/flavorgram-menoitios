import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import RecommendedPost from "./post/recommendedPost";
import FollowerNum from "./FollowerNum";
import FollowingNum from "./FollowingNum";

function Profile(props) {
  const [user, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loggedin, setLoggedin] = useState([]);
  const [followingToFollow, setFollowingToFollow] = useState(false);
  const [followToFollowing, setFollowToFollowing] = useState(false);
  const [notFollowing, setNotFollowing] = useState(true);
  const [userPosts, setUserPosts] = useState([])
  const { username } = useParams();
  // const userName = localStorage.getItem("FG_USERNAME");
  const following = loggedin.followingUserNames;

  const loggedInUser = useSelector((state) => state.session.user)

  useEffect(() => {
    setLoaded(true);
    async function fetchData() {
      let res = await fetch(`/api/users/${username}`);
      res = await res.json();
      setUsers(res);
      console.log(res)
      setUserPosts(res.recipes)
      setLoggedin(loggedInUser);
      setLoaded(true);
    }

    fetchData();
  }, [username]);

  const overFollowing = () => {
    const followButton = window.document.querySelector(".follow-button");

    if (followButton === null) {
      if (
        (followingToFollow === false && followToFollowing === false) ||
        notFollowing === false
      ) {
        const followingButton = window.document.querySelector(
          ".following-button"
        );
        followingButton.innerHTML = "Unfollow";
      }
    }
  };

  const leftFollowing = () => {
    const followButton = window.document.querySelector(".follow-button");
    if (followButton === null) {
      if (
        (followingToFollow === false && followToFollowing === false) ||
        notFollowing === false
      ) {
        const followingButton = window.document.querySelector(
          ".following-button"
        );
        followingButton.innerHTML = "Following";
      }
    }
  };
  const follow = async () => {
    const followButton = window.document.querySelector(".follow-button");
    const followingButton = window.document.querySelector(".following-button");

    if (followButton === null) {
      if (
        followingButton.innerHTML === "Following" ||
        followingButton.innerHTML === "Unfollow"
      ) {
        unFollow();
        setFollowingToFollow(false);
        return;
      }
    }
    if (followButton.innerHTML === "Follow") {
      followButton.classList.remove("follow-button");
      followButton.classList.add("following-button");
      followButton.innerHTML = "Following";
      setFollowToFollowing(true);
      setNotFollowing(false);
      await fetch(`/api/users/${user.id}/follower`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          followerId: loggedin.id,
        }),
      });
      const response = await fetch(`/api/users/${username}`);
      const result = await response.json();
      setUsers(result);
      return;
    }
  };
  const unFollow = async () => {
    const followingButton = window.document.querySelector(".following-button");
    const followButton = window.document.querySelector(".follow-button");

    if (followingButton === null) {
      if (followButton.innerHTML === "Follow") {
        follow();
        setFollowToFollowing(false);
        setFollowingToFollow(false);
        return;
      }
    }
    if (
      followingButton.innerHTML === "Unfollow" ||
      followingButton.innerHTML === "Following"
    ) {
      followingButton.classList.remove("following-button");
      followingButton.classList.add("follow-button");
      followingButton.innerHTML = "Follow";
      setFollowingToFollow(true);
      await fetch(`/api/users/${user.id}/follower`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          followerId: loggedin.id,
        }),   
      });
      const response = await fetch(`/api/users/${username}`);
      const result = await response.json();
      setUsers(result);
      return;
    }
  };

  return (
    loaded && (
      <main className="main__color">
        <div className="profile__main">
          <header className="main__header">
            <div className="main__header__div">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  cursor: "pointer",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <span className="header__profilePicture">
                  <img
                    className="profile__picture"
                    src={user.avatarUrl}
                    alt="profile"
                  />
                </span>
              </div>
            </div>
            <section style={{ width: "613px", height: "194px" }}>
              {/* <div className="username-div">
                <h2 className="section__userName">{user.username}</h2>
                {username !== userName &&
                following.includes(`${username}`) === false ? (
                  <div
                    className="section__div__followButton"
                    style={{
                      width: "93px",
                      height: "30px",
                      marginLeft: "25px",
                    }}
                  >
                    <button
                      onMouseEnter={overFollowing}
                      onMouseLeave={leftFollowing}
                      onClick={follow}
                      className="follow-button"
                    >
                      Follow
                    </button>
                  </div>
                ) : username !== userName ? (
                  <div
                    className="section__div__followButton"
                    style={{
                      width: "93px",
                      height: "30px",
                      marginLeft: "25px",
                    }}
                  >
                    <button
                      onMouseEnter={overFollowing}
                      onMouseLeave={leftFollowing}
                      onClick={unFollow}
                      className="following-button"
                    >
                      Following
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div> */}
              <ul
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "row",
                  listStyle: "none",
                  paddingLeft: "0px",
                }}
              >
                <li
                  style={{
                    marginLeft: "0px",
                    marginRight: "40px",
                    fontSize: "16px",
                    display: "list-item",
                  }}
                >
                  <span>
                    <span
                      style={{
                        color: "rgba(var(--i1d,38,38,38),1)",
                        fontWeight: "600",
                      }}
                    >
                      {userPosts.length}
                    </span>
                    posts
                  </span>
                </li>
                <li
                  style={{
                    marginRight: "40px",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ color: "inherit" }} tabIndex="0">
                    <span
                      style={{
                        color: "rgba(var(--i1d,38,38,38),1)",
                        fontWeight: "600",
                      }}
                      title="600"
                    >
                      {/* had component followers but couldn't figure out how to use */}
                      <span>{user.numFollowers}</span>
                    </span>
                    followers
                  </span>
                </li>
                <li
                  style={{
                    marginRight: "0",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ color: "inherit" }} tabIndex="0">
                    <span
                      style={{
                        color: "rgba(var(--i1d,38,38,38),1)",
                        fontWeight: "600",
                      }}
                    >
                      <span>{user.numFollowing} </span>
                    </span>
                    following
                  </span>
                </li>
              </ul>
              <div className="section__bio">
                <p>{user.bio}</p>
              </div>
            </section>
          </header>
          <div className="main__div__posts">
            <a className="posts__sectionTitle" href="/">
              <span className="span-posts">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-grid-3x3-gap"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                </svg>
                <span style={{ marginLeft: "6px" }}>Posts</span>
              </span>
            </a>
          </div>
          <div className="posts-images">
            <article className="posts__images__article">
              <div
                style={{ marginTop: "2vh" }}
                className="recommended-post-holder"
              >
                {userPosts.map((p) => (
                  <RecommendedPost key={p.id} usepost={p} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
    )
  );
}

export default Profile;
