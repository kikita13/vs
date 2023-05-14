import React from "react";
import Comment from "./comment";
import Thread from "./thread";

const Comments = (props) => {
  const { styles, posts, comments, users, group } = props;
  let info = [];
  const comment = comments.filter((com) => com?.post_id == posts.post_id);
  info = comment.map((comment) => {
    const user = users?.find((data) => data.id == comment.from_id);
    return { user, comment };
  });
  
  let infoThread = []
  const thread = comments.filter((com) => com?.thread?.map(th => th.post_id == posts.post_id));
  
  infoThread = comment?.thread?.items?.map((comment) => {
    const user = users?.find((data) => data.id == comment.from_id);
    return { user, comment };
  });
  console.log(infoThread);
  return (
    <div className={styles.comments}>
      {info?.map((data) => (
      <Comment styles={styles} data={data} group={group}>
        {infoThread?.map(thread => (
          <Thread styles={styles} data={thread} group={group}/>
        ))}
      </Comment>
      ))}
    </div>
  );
};

export default Comments;
