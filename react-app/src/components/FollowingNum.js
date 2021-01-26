import { useEffect } from "react";
import FollowerNum from "./FollowerNum";

const FollowingNum = (props) => {
  useEffect(() => {}, [props.following]);

  return props.following;
};

export default FollowerNum;
