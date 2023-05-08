import { openPage } from "@/consts/links";
import React from "react";

const Head = (props) => {
  const { styles, posts, group, groups } = props;

  return (
    <div className={styles.head}>
      <img
        className={styles.image}
        src={posts.user_firstName ? posts.user_avatar50 : group.photo_50}
        onClick={() => {
          openPage(posts);
        }}
      />
      <div className={styles.info}>
        <div className={styles.name}>
          {posts.user_firstName
            ? `${posts.user_firstName} ${posts.user_LastName}`
            : `${group.name}`}
        </div>
        <div className={styles.date}>
          {new Date(posts.post_date * 1000).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Head;
