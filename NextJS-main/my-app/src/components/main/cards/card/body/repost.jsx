import { testForTypeAttachment } from '@/consts/links';
import React from 'react';

const Repost = (props) => {
  const {styles, posts} = props

  return (
<div className={styles.body}>
      <div className={styles.text}>{posts.text + posts.copy_history[0].text}</div>
      <div className={styles.attachments}>
        {posts.copy_history.attachments?.map((atach) => (
          <img
            key={posts.id}
            className={styles.img}
            src={testForTypeAttachment(atach)}
            alt={testForTypeAttachment(atach).toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Repost;