import React from 'react';
import { useSelector } from 'react-redux';

const index = () => {
    const posts = useSelector(state => state.posts.posts)
    const group_ids = posts[0]?.post_copyHistoryOwnersIds
    console.log(group_ids);
    return (
        <div>
            {}
        </div>
    )
};

export default index;