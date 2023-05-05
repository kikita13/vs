import React from "react";
import styles from "@styles/main.module.css";
import { Card } from "./card";

const Main = (props) => {

  const { posts, group } = props;

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {posts.map((data) => (
          <Card key={data.id} data={data} group={group}/>
        ))}
      </div>
    </div>
  );
};

export default Main;
