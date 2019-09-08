import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostForm from '../../common/PostForm/PostForm';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

//Import Redux elements
import { editPostRequest, resetRequest, loadSinglePostRequest  } from '../../../redux/postsReducer';


const EditPost = ({match}) => {
    //Hooks elements
    const dispatch = useDispatch();
    const post = useSelector(({ posts }) => posts.singlePost );
    const request = useSelector(({ posts }) => posts.request );
    const postID = match.params.id;

    const editPost = (post) => {
        dispatch(editPostRequest(post, postID ));
    }
    
    useEffect(() => {
        const fetchPost = async () => {
            await dispatch(loadSinglePostRequest(postID));
            dispatch(resetRequest());
        }
        fetchPost();
    },[]);

        if(request.error) return <Alert variant="error">{request.error}</Alert>
        else if(request.success) return <Alert variant="success">Post has been edited!</Alert>
        else if(request.pending) return <Spinner />
        else return (
            <PostForm {...post} handleSubmit={editPost}/>
    );
};

export default EditPost;