import { openPage } from "@/consts/links";
import React from "react";

const Comments =  (props) => {
  const { styles, posts, comments, users, group } = props;
  let info = [];
  const comment = comments.filter((com) => com?.post_id == posts.post_id);
  info = comment.map((comment) => {
    const user = users?.find((data) => data.id == comment.from_id);
    return { user, comment };
  });

  return (
    <div className={styles.comments}>
      {info?.map((data) => (
        <div className={styles.comment}> 
        <img
          className={styles.image}
          src={data.user?.photo_50 ? data.user.photo_50 : group.photo_50}
          onClick={() => {
            openPage(`id${data.user?.id}`);
          }} 
        />
        <div className={styles.comment__body}>
          <div className={styles.name}>
          {data.user?.first_name && data.user?.last_name ? `${data.user.first_name} ${data.user.last_name}` : group.name}
          </div>
          <div className={styles.text}>{data.comment.text}</div>
          <div className={styles.date}>
            {new Date(data.comment.date * 1000).toLocaleDateString()}
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Comments;


