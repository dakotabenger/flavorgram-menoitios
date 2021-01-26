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
        <header className="main__header"></header>
      </div>
    </main>
  );
}

export default Profile;
