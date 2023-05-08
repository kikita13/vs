import React from "react";
import Repost from "./repost";
import Post from "./post";

const Body = (props) => {
  const { styles, posts, group, groups} = props;

  if(posts.post_copyHistory) {

    return <Repost styles={styles} posts={posts} group={group} groups={groups}/>
  } {
    return <Post styles={styles} posts={posts} groups={groups}/>
  }
};

export default Body;
