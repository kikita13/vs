import { fetchPosts } from "@/store/slices/postSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchGroup } from "@/store/slices/groupSlice";
import { fetchUser } from "@/store/slices/userSlice";
const Button = (props) => {
  const { styles, id, text } = props;

  const dispatch = useDispatch()

  const handleClick = (id) => {
    if (+ id > 0) {
      dispatch(fetchPosts(id));
      dispatch(fetchUser(id))
    } else {
      dispatch(fetchPosts(id));
      dispatch(fetchGroup(id))
      dispatch(fetchUser(id))
    }
  };

  return (
    <div className={styles.btn} onClick={() => handleClick(id)}>
      {text}
    </div>
  );
};

export default Button;
