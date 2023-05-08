import React from "react";
import Repost from "./repost";
import Post from "./post";

const Body = (props) => {
  const { styles, posts, group} = props;
  const group_ids = posts?.post_copyHistoryOwnersIds
  console.log(group_ids);
  if(posts.post_copyHistory) {
    return <Repost styles={styles} posts={posts} group={group}/>
  } {
    return <Post styles={styles} posts={posts}/>
  }
};

export default Body;
