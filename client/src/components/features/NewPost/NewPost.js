import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostForm from '../../common/PostForm/PostForm';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

//Import Redux elements
import { addPostRequest, resetRequest } from '../../../redux/postsReducer';


const NewPost = () => {
    //Hooks elements
    const dispatch = useDispatch();
    const request = useSelector(({ posts }) => posts.request );

    const addPost = (post) => {
        dispatch(addPostRequest(post));
    }
    
    useEffect(() => {
        dispatch(resetRequest());
    },[]);
    
    if(request.error) return <Alert variant="error">{request.error}</Alert>
    else if(request.success) return <Alert variant="success">Post has been added!</Alert>
    else if(request.pending) return <Spinner />
    else return (
        <PostForm handleSubmit={addPost}/>
    );
};

export default NewPost;