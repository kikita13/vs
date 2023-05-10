import { fetchComments } from '@/store/slices/commentsSlice';
import React from 'react';
import { useSelector } from 'react-redux';


const index = () => {
const posts = useSelector(state => state.posts.posts)

    const combinedComments = [];
    
    // Функция для загрузки комментариев к каждому посту и объединения их в combinedComments
    const loadComments = async () => {
      for (const post of posts) {
        try {
          const { id_post, id_ownerPost } = post;
          const response = await dispatch(fetchComments({ postId: posts.post_id, ownerId: posts.post_id }));
          const comments = response.items.map((comment) => ({
            id_post,
            id_ownerPost,
            comment_text: comment.text,
            comment_id: comment.id,
          }));
          combinedComments.push(...comments);
        } catch (error) {
          console.error(`Failed to load comments for post ${post.id_post}:`, error);
        }
      }
    
      console.log(combinedComments);
    };
    
    // Вызов функции loadComments для загрузки комментариев
    loadComments();
    
    return (
        <div>
            {}
        </div>
    )
};

export default index;