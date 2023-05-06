import React from "react";

const Body = (props) => {
  const { styles, posts } = props;
  return (
    <div className={styles.body}>
      <div className={styles.text}>{posts.text}</div>
      <div className={styles.attachments}>
        {posts.attachments.map((atach) => (
          <img
            className={styles.img}
            src={
              atach.photo?.sizes[Math.max(atach.photo?.sizes.length - 1)].url
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
