import { ICONS } from "@/consts/consts";
import { openPage, openPost } from "@/consts/links";
import React from "react";

const Links = (props) => {
  const { styles, posts, group } = props;

  return (
    <div className={styles.links}>
      <div
        className={styles.icons}
        id={styles.target}
        onClick={() => {
          openPost(posts);
        }}
      >
        <img className={styles.icon} src={ICONS[3].icon} alt="post" />
        Post
      </div>
      <div className={styles.icons} id={styles.target}>
        <img className={styles.icon} src={ICONS[3].icon} alt="comment" />
        Comment
      </div>
      <div
        className={styles.icons}
        id={styles.target}
        onClick={() => {
          openPage(posts);
        }}
      >
        <img className={styles.icon} src={ICONS[3].icon} alt="page" />
        Page
      </div>
    </div>
  );
};

export default Links;
