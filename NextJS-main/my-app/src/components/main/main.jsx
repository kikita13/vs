import React, { useEffect, useState } from "react";
import styles from "@styles/main.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "./cards/card/card";
import { fetchGroups } from "@/store/slices/groupsSlice";
import { fetchComments } from "@/store/slices/commentsSlice";
import { fetchUser } from "@/store/slices/userSlice";

const Main = (props) => {
  const group = useSelector(state => state.group.group)
  const groups = useSelector(state => state.groups.groups)
  const posts = useSelector(state => state.posts.posts)
  const comments = useSelector(state => state.comments.comments)
  const users = useSelector(state => state.user.user)
  const group_idss = posts[0]?.post_copyHistoryOwnersIds
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGroups(group_idss?.join(',')));
    dispatch(fetchComments(posts))
  },[posts])
    
  useEffect(() => {
    const ids = comments.map(comment => comment?.from_id)
    setTimeout(() => {

      dispatch(fetchUser(ids.filter(Boolean).join(','))) 
    },2000)
  },[comments])
  
  
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {posts?.map((data) => (
          <Card key={data.post_date} posts={data} group={group} groups={groups} comments={comments} users={users}/>
        ))}
      </div> 
    </div>
  ) 
};

export default Main;
