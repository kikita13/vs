import { fetchPosts } from "@/store/slices/postSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroup } from "@/store/slices/groupSlice";

const Button = (props) => {
  const { styles, id, text, maxPosts } = props;

  const dispatch = useDispatch()
  const handleClick = (props) => {
   
    if (+ id > 0) {
      dispatch(fetchPosts(props));

    } else {
      dispatch(fetchPosts(props));
      dispatch(fetchGroup(props))
    }
  };

  return (
    <div className={styles.btn} onClick={() => handleClick({id, maxPosts})}>
      {text}
    </div>
  );
};

export default Button;
