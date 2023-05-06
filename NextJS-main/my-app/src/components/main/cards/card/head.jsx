import { openPage } from "@/consts/links";
import React from "react";

const Head = (props) => {
    const { styles, posts, group } = props
    
  return (
    <div className={styles.head}>
      <img
        className={styles.image}
        src={posts?.first_name ? posts.photo_50 : group.photo_50}
        onClick={() => {
          openPage(posts);
        }}
      ></img>
      <div className={styles.info}>
        <div className={styles.name}>
          {posts.first_name
            ? `${posts.first_name} ${posts.last_name}`
            : `${group.name}`}
        </div>
        <div className={styles.date}>
          {new Date(posts.date * 1000).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Head;
