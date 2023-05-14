import React, { useEffect } from "react";
import Head from "./head/head";
import Body from "./body/body";
import Footer from "./footer/footer";
import styles from "@/styles/mainCard.module.css";
import Comments from "./comments/comments";

const Card = (props) => {
  const { posts, group, groups, comments, users } = props;

  return (
    <div className={styles.card}>
      <Head 
        styles={styles} 
        posts={posts} 
        group={group} 
        groups={groups} />
      <Body
        styles={styles}
        posts={posts}
        group={group}
        groups={groups}
      />
      <Footer
        styles={styles}
        posts={posts}
        group={group}
        groups={groups}
      />
      <Comments
        group={group}
        users={users}
        styles={styles}
        posts={posts}
        comments={comments}
      />
    </div>
  );
};

export default Card;
