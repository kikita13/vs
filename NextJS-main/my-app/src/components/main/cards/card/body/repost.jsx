import { testForTypeAttachment } from '@/consts/links';
import React, { useEffect } from 'react';

const Repost = (props) => {
  const {styles, posts } = props
  const repostSource = {...posts.post_copyHistory[0]}

  
  // useEffect( () => {
  //     ids.push(repostSource.owner_id)
  //      uniqueIds = ids.filter((value, index) => {
  //       return ids.indexOf(value) === index;
  //     });
  //     console.log(uniqueIds.join(','));
  // },[posts])

  return (
<div className={styles.body}>
      <div className={styles.text}>{}{posts.post_text + posts.post_copyHistory[0].text}</div>
      <div className={styles.attachments}>
        {posts.post_copyHistory[0].attachments?.map((atach, index) => (
          <img
            key={index}
            className={styles.img}
            src={testForTypeAttachment(atach)}
            alt={testForTypeAttachment(atach)?.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Repost;