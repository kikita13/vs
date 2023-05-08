import React from "react";
import Head from "./head";
import Body from "./body/body";
import Footer from "./footer/footer";
import styles from "@/styles/mainCard.module.css";

const Card = (props) => {
  const { posts, profiles, group } = props;
  return (
    <div className={styles.card}>
      <Head styles={styles} posts={posts} group={group} profiles={profiles} />
      <Body styles={styles} posts={posts} group={group} profiles={profiles} />
      <Footer styles={styles} posts={posts} group={group} profiles={profiles} />
    </div>
  );
};

export default Card;
