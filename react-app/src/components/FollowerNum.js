import { useEffect } from "react";

const FollowerNum = (props) => {
  useEffect(() => {}, [props.followers]);

  return props.followers;
};

export default FollowerNum;
