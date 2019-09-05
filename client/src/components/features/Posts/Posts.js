import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadPostsRequest } from '../../../redux/postsReducer';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.data);
  const request = useSelector(({ posts }) => posts.request );

  useEffect(() => {
    dispatch(loadPostsRequest());
  },[]);

    return (
      <div>
        { request.pending && request.success === null && <Spinner /> }
        { !request.pending && request.success && posts.length > 0 && <PostsList posts={posts} /> }
        { !request.pending && request.error !== null && <Alert variant='error'>{ request.error }</Alert>}
        { !request.pending && request.success && posts.length === 0 && <Alert variant='Info'>No Posts</Alert> }
      </div>
    );
};

export default Posts;