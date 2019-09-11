import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSinglePostRequest } from '../../../redux/postsReducer';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import SinglePostForm from '../../common/SinglePostForm/SinglePostForm';

const SinglePost = ({ match }) => {
    const dispatch = useDispatch();
    const singlePost = useSelector(({ posts }) => posts.singlePost);
    const request = useSelector(({ posts }) => posts.request); 
    const { title, author, content } = singlePost;
    useEffect(() => {
      dispatch(loadSinglePostRequest(match.params.id));
    },[]);
  
    return (
      <div>
        { request.pending && request.success === null && <Spinner /> }
        { !request.pending && request.success && 
          <SinglePostForm title={ title } author={ author } content={ content } />
        }
        { !request.pending && request.error !== null && <Alert variant='error'>{ request.error }</Alert>}
      </div>
    );
  } 
  
  export default SinglePost;