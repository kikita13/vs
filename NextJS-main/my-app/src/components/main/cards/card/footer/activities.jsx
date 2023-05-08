import { ICONS } from "@/consts/consts";
import React from "react";

const Activities = (props) => {
  const { styles, posts, group } = props

  return (
    <div className={styles.activities}>
      <div className={styles.icons}>
        <img className={styles.icon} src={ICONS[0].icon} alt="likes" />{" "}
        {posts?.post_likes?.count}
      </div>
      <div className={styles.icons}>
        <img className={styles.icon} src={ICONS[1].icon} alt="comments" />{" "}
        {posts?.post_comments?.count}
      </div>
      <div className={styles.icons}>
        <img className={styles.icon} src={ICONS[2].icon} alt="reposts" />{" "}
        {posts?.post_reposts?.count}
      </div>
      <div className={styles.icons}>
        <img className={styles.icon} src={ICONS[4].icon} alt="views" />{" "}
        {posts?.post_views?.count}
      </div>
    </div>
  );
};

export default Activities;
