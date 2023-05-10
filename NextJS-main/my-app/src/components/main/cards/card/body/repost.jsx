import { SPLIT_TEXT } from "@/consts/consts";
import { openPage, testForTypeAttachment } from "@/consts/links";
import React from "react";

const Repost = (props) => {
  const { styles, posts, groups } = props;
  const repInf = groups?.find(
    (group) =>
      Math.abs(group.id) == Math.abs(posts.post_copyHistory[0].owner_id)
  );
  const repostInfo = { ...repInf, owner_id: repInf?.id };
  const repost = posts.post_copyHistory[0];
  console.log(repostInfo.id);
  return (<>
      <div className={styles.text}>{SPLIT_TEXT(posts.post_text)}</div>
    <div className={styles.repostBody}>
        <div className={styles.head}>
          <img
            className={styles.image}
            src={repostInfo.photo_50}
            onClick={() => {openPage(+repostInfo.id)}}
            />
          <div className={styles.info}>
            <div className={styles.name}>{repostInfo.name}</div>
            <div className={styles.date}>
              {new Date(repost.date * 1000).toLocaleDateString()}
            </div>
          </div>
        </div>
        
      <div className={styles.text}>{SPLIT_TEXT(repost.text)}</div>

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
          </>
  );
};

export default Repost;
