import { ICONS } from "@/consts/consts";
import React from "react";

const Activities = (props) => {
  const { styles, posts, group } = props

  return (
    <div className={styles.activities}>
      <div className={styles.icons}>
        <img className={styles.icon} src={ICONS[0].icon} alt="likes" />{" "}
        {posts.likes.count}
      </div>
      <div className={styles.icons}>
        <img className={styles.icon} src={ICONS[1].icon} alt="comments" />{" "}
        {posts.comments.count}
      </div>
      <div className={styles.icons}>
        <img className={styles.icon} src={ICONS[2].icon} alt="reposts" />{" "}
        {posts.reposts.count}
      </div>
    </div>
  );
};

export default Activities;
