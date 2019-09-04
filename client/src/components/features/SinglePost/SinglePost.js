import React, { useEffect } from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import { useDispatch, useSelector } from "react-redux";
import { loadSinglePostRequest } from '../../../redux/postsReducer'

import Spinner from '../../common/Spinner/Spinner';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Alert from '../../common/Alert/Alert';
import Author from '../../common/Author/Author';

const SinglePost = ({ match }) => {
    const dispatch = useDispatch();
    const singlePost = useSelector(({ posts }) => posts.singlePost);
    const request = useSelector(({ posts }) => posts.request); 
  
    useEffect(() => {
      dispatch(loadSinglePostRequest(match.params.id));
    },[]);
  
    return (
      <div>
        { request.pending && request.success === null && <Spinner /> }
        { !request.pending && request.success && 
          <div>
            <PageTitle>{ singlePost.title }</PageTitle>
            <Author>{ singlePost.author }</Author>
            <HtmlBox>{ singlePost.content }</HtmlBox>
          </div>
        }
        { !request.pending && request.error !== null && <Alert variant='error'>{ request.error }</Alert>}
      </div>
    );
  } 
  
  export default SinglePost;