import React from "react";
import Head from "./head";
import Body from "./body";
import Footer from "./footer/footer";
import styles from "@/styles/mainCard.module.css";

const Card = (props) => {
  const { posts, group } = props;
  return (
    <div className={styles.card}>
      <Head styles={styles} posts={posts} group={group} />
      <Body styles={styles} posts={posts} group={group} />
      <Footer styles={styles} posts={posts} group={group} />
    </div>
  );
};

export default Card;
