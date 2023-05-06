import  {fetchPosts}  from '@/store/slices/postSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const index = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts.posts)

    return (
        <div onClick={() => {dispatch(fetchPosts());}}>a
            {post?.map(data => (<div>{data.id}</div>))}
        </div>
    );
};

export default index;