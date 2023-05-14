import React from "react";

const Thread = (props) => {
  const {styles, data, group} = props 
  
  return (
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
          {data.user?.first_name && data.user?.last_name
            ? `${data.user.first_name} ${data.user.last_name}`
            : group.name}
        </div>
        <div className={styles.text}>{data.comment.text}</div>
        {data.comment.attachments && (
          <div className={styles.attachments}>
            {data.comment?.attachments?.map((attachment) => (
              <img
                key={data.comment.post_id}
                className={styles.img}
                src={testForTypeAttachment(attachment)}
                alt={testForTypeAttachment(attachment)?.toString()}
              />
            ))}
          </div>
        )}

        <div className={styles.date}>
          {new Date(data.comment.date * 1000).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Thread;
