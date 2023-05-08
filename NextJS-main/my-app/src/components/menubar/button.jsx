import { fetchPosts } from "@/store/slices/postSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroup } from "@/store/slices/groupSlice";

const Button = (props) => {
  const { styles, id, text } = props;

  const dispatch = useDispatch()
  const handleClick = (id) => {
    if (+ id > 0) {
      dispatch(fetchPosts(id));
    } else {
      dispatch(fetchPosts(id));
      dispatch(fetchGroup(id))

    }
  };

  return (
    <div className={styles.btn} onClick={() => handleClick(id)}>
      {text}
    </div>
  );
};

export default Button;
