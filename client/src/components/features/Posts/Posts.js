import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadPostsByPageRequest } from '../../../redux/postsReducer';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

const Posts = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.data);
  const request = useSelector(({ posts }) => posts.request );
  const pages = useSelector(({ posts }) => Math.ceil(posts.amount / posts.postsPerPage));

  const [ initialPage ] = useState(props.initialPage || 1);
  const [ postsPerPage ] = useState(props.postsPerPage || 1);
  const [ pagination ] = useState(props.pagination || true );

  const loadPostsPage = (page) => {
    dispatch(loadPostsByPageRequest(page, postsPerPage));  
  }

  useEffect(() => {
    dispatch(loadPostsByPageRequest(initialPage, postsPerPage));  
  },[]);

    return (
      <div>
        { request.pending && request.success === null && <Spinner /> }
        { !request.pending && request.error !== null && <Alert variant='error'>{ request.error }</Alert>}
        { !request.pending && request.success && posts.length === 0 && <Alert variant='Info'>No Posts</Alert> }
        { !request.pending && request.success && posts.length > 0 && <PostsList posts={posts} /> }
        { pagination && <Pagination pages={pages} initialPage={initialPage} onPageChange={(page) => loadPostsPage(page) } />}
      </div>
    );
};

export default Posts;