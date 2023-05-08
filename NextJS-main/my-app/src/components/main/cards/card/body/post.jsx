import { testForTypeAttachment } from '@/consts/links';
import React from 'react';

const Post = (props) => {
  const {styles, posts} = props

  return (
    <div className={styles.body}>
      <div className={styles.text}>{posts.post_text}</div>
      <div className={styles.attachments}>
        {posts.post_attachments?.map((atach) => (
          <img
            key={posts.post_id}
            className={styles.img}
            src={testForTypeAttachment(atach)}
            alt={testForTypeAttachment(atach)?.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;