import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadPostsRequest } from '../../../redux/postsReducer';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.data);
  const request = useSelector(({ posts }) => posts.request );

  useEffect(() => {
    dispatch(loadPostsRequest());
  },[]);

    return (
      <div>
        {request.pending && <Spinner />}
        <PostsList posts={posts} />
      </div>
    );
};

export default Posts;