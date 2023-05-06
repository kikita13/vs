import React from "react";
import styles from "@styles/main.module.css";
import { useSelector } from "react-redux";
import Card from "./cards/card/card";

const Main = (props) => {
  const posts = useSelector(state => state.posts.posts)
  const group = useSelector(state => state.group.group)
  
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {posts?.map((data) => (
          <Card key={data.date} posts={data} group={group}/>
        ))}
      </div> 
    </div>
  ) 
};

export default Main;
