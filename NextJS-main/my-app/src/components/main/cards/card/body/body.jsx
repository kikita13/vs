import React from "react";
import Repost from "./repost";
import Post from "./post";

const Body = (props) => {
  const { styles, posts } = props;
  if(posts.copy_history) {
    return <Repost styles={styles} posts={posts}/>
  } {
    return <Post styles={styles} posts={posts}/>
  }
};

export default Body;
