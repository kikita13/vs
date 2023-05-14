import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { fetchComments } from '@/redux/slices/commentsSlice';
import { fetchPosts } from '@/redux/slices/postsSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
  const dispatch = useDispatch()
  const [owner_id, setOwner_id] = useState('')
  const [comms, setComms] = useState('')
  const posts = useSelector(state => state.posts.posts)


  const handleClickPosts = () => {
    dispatch(fetchPosts(owner_id))
  }

  const handleClickSome = () => {
    dispatch(fetchComments())
  }

  return (
    <div>
      <Input setValue={setOwner_id}/>
      <Button handleClick={handleClickPosts} value={owner_id} text='заказать посты пользователя'/>
      <br/>
      <Input setValue={setComms}/>
      <Button handleClick={handleClickSome} text='заказать комментарии к постам'/>
    </div>
  );
};

export default index;