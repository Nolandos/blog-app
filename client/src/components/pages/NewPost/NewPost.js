import React, { useEffect } from 'react';
import PostForm from '../../features/PostForm/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { resetRequest } from '../../../redux/postsReducer';

const NewPost = () => {
  const dispatch = useDispatch();
  const request = useSelector(({ posts }) => posts.request );
 
  useEffect(() => {
    dispatch(resetRequest());
  },[request.success]);

  return (
    <div>
      <PostForm />
    </div>
  )
};

export default NewPost;