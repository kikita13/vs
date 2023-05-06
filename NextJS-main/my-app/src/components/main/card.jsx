import { ICONS } from "@/consts/consts";
import styles from "@/styles/mainCard.module.css";
import Image from "next/image";

export const Card = (props) => {
  const { data, group } = props;

  const openLink = (url) => window.open(url, "_blank");
  const openPage = data => {data.first_name
    ? openLink(`https://vk.com/id${data.from_id}`)
    : openLink(`https://vk.com/club${Math.abs(data.owner_id)}`);}
    const openPost = (data) => {openLink(`https://vk.com/wall${data.owner_id}_${data.id}`)}
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <img
          className={styles.image}
          src={data.first_name ? data.photo_50 : group.photo_50}
          onClick={() => {openPage(data)}}
        ></img>
        <div className={styles.info}>
          <div className={styles.name}>
            {data.first_name
              ? `${data.first_name} ${data.last_name}`
              : `${group.name}`}
          </div>
          <div className={styles.date}>
            {new Date(data.date * 1000).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.text}>{data.text}</div>
        <div className={styles.attachments}>
          {data.attachments.map((atach) => (
            <img
              className={styles.img}
              src={
                atach.photo?.sizes[Math.max(atach.photo?.sizes.length - 1)].url
              }
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.activities}>
          <div className={styles.icons}>
            <img 
            className={styles.icon} 
            src={ICONS[0].icon} 
            alt="likes" />{" "}
            {data.likes.count}
          </div>
          <div className={styles.icons}>
            <img 
            className={styles.icon} 
            src={ICONS[1].icon} 
            alt="comments" />{" "}
            {data.comments.count}
          </div>
          <div className={styles.icons}>
            <img 
            className={styles.icon} 
            src={ICONS[2].icon} 
            alt="reposts" />{" "}
            {data.reposts.count}
          </div>
        </div>
        <div className={styles.links}>
          <div 
          className={styles.icons} 
          id={styles.target}
          onClick={() => {openPost(data)}}>
            <img 
            className={styles.icon} 
            src={ICONS[3].icon} alt="post" />
            Post
          </div>
          <div 
          className={styles.icons} 
          id={styles.target}>
            <img 
            className={styles.icon} 
            src={ICONS[3].icon} alt="comment" />
            Comment
          </div>
          <div 
          className={styles.icons} 
          id={styles.target}
          onClick={() => {openPage(data)}}>
            <img 
            className={styles.icon} 
            src={ICONS[3].icon} alt="page"/>
            Page
          </div>
        </div>
      </div>
    </div>
  );
};
