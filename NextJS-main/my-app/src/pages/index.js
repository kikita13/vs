import React, { useState } from 'react';
import Main from '@/components/main/main';
import Menubar from '@/components/menubar/menubar';
import styles from '../styles/index.module.css'

const index = () => {
  const [posts, setPosts] = useState([])
  const [group, setGroup] = useState([])
  return (
    <div className={styles.col}>
      <Menubar setPosts={setPosts} setGroup={setGroup}/>
      <Main posts={posts} group={group}/>
    </div>
  );
};

export default index;