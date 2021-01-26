import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FollowerNum from "./FollowerNum";
import FollowingNum from "./FollowingNum";

function Profile(props) {
  const [user, setUser] = useState([]);
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="main__color">
      <div className="profile__main">
        <header className="main__header">
          <div
            style={{
              width: "291px",
              height: "194px",
              marginRight: "30px",
            }}
          >
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
                  style={{
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "150px",
                    height: "150px",
                  }}
                  //   src={user.avatarUrl}
                  //   alt="profile"
                />
              </span>
            </div>
          </div>
          <section style={{ width: "613px", height: "194px" }}>
            <div
              style={{
                marginBotton: "20px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <h2 className="section__userName">UserName</h2>
            </div>
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
                    {/* {user.posts.length}{" "} */}
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
                    {/* <FollowerNum followers={user.followersNum} />{" "} */}
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
                    {/* <NumFollowing following={user.numFollowing} />{" "} */}
                  </span>
                  following
                </span>
              </li>
            </ul>
            <div className="section__bio">{/* <p>{user.bio}</p> */}</div>
          </section>
        </header>
        <div className="main__div__posts">
          <a className="div__posts__sectionTitle" href="/demo">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgba(var(--i1d,38,38,38),1)",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              <span style={{ marginLeft: "6px" }}>Posts</span>
            </span>
          </a>
        </div>
        <div className="posts-images">
          <article className="posts-images__article">
            <div
              style={{ marginTop: "2vh" }}
              className="recomended-post-holder"
            ></div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Profile;
