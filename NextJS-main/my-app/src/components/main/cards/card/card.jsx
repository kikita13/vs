import React from "react";
import Head from "./head";
import Body from "./body/body";
import Footer from "./footer/footer";
import styles from "@/styles/mainCard.module.css";

const Card = (props) => {
  const { posts, profiles, group, groups } = props;
  return (
    <div className={styles.card}>
      <Head styles={styles} posts={posts} group={group} groups={groups}/>
      <Body styles={styles} posts={posts} group={group} profiles={profiles} groups={groups}/>
      <Footer styles={styles} posts={posts} group={group} profiles={profiles} groups={groups}/>
    </div>
  );
};

export default Card;
