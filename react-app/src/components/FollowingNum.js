import { useEffect } from "react";

const FollowingNum = (props) => {
  useEffect(() => {}, [props.following]);

  return props.following;
};

export default FollowingNum;
