import React from "react";
import Activities from "./activities";
import Links from "./links";

const Footer = (props) => {
  const { styles, posts, group } = props;

  return (
    <div className={styles.footer}>
      <Activities styles={styles} posts={posts} group={group} />
      <Links styles={styles} posts={posts} group={group} />
    </div>
  );
};

export default Footer;
