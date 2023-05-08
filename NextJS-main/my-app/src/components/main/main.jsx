import React, { useEffect } from "react";
import styles from "@styles/main.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "./cards/card/card";
import { fetchGroups } from "@/store/slices/groupsSlice";

const Main = (props) => {
  const posts = useSelector(state => state.posts.posts)
  const group = useSelector(state => state.group.group)
  const group_idss = posts[0]?.post_copyHistoryOwnersIds
  const dispath = useDispatch()
  useEffect(() => {
    dispath(fetchGroups(group_idss?.join(',')))
  },[posts])
    console.log(group_idss?.join(','));

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {posts?.map((data) => (
          <Card key={data.post_date} posts={data} group={group} />
        ))}
      </div> 
    </div>
  ) 
};

export default Main;
