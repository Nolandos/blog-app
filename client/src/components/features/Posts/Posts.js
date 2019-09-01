import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadPostsRequest } from '../../../redux/postsReducer';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(loadPostsRequest());
  },[]);

    return (
      <div>
        Posts
        <ul>
          { posts.map(post =><li key={post.id}>{post.title}</li>) }
        </ul>
      </div>
    );
};

export default Posts;