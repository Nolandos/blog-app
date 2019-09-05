import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormInput from '../../../utils/myHooks/useFormInput'; // import custom hook
import './PostForm.scss';

//Import Components
import TextField from '../../common/TextField/TextField';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

//Imports for Medium editor text
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

//Import Redux elements
import { addPostRequest } from '../../../redux/postsReducer';


const PostForm = () => {
    //Hooks elements
    const dispatch = useDispatch();
    const titleInput = useFormInput('');
    const authorInput = useFormInput('');
    const [content, setContent] = useState('');
    const request = useSelector(({ posts }) => posts.request );

    const handleEditor = (text) => {
        setContent(text);
    }

    const addPost = (e) => {
        e.preventDefault();

        const post = {
            title: titleInput.value,
            author: authorInput.value,
            content
        }
      
        dispatch(addPostRequest(post));
    }
    
    if(request.error) return <Alert variant="error">{request.error}</Alert>
    else if(request.success) return <Alert variant="success">Post has been added!</Alert>
    else if(request.pending) return <Spinner />
    else return (
        <form onSubmit={ addPost }>
            <TextField
                label="Title"
                {...titleInput}
            />
            <TextField
                label="Author"
                {...authorInput}
            />

            <Editor
                className="content-editor"
                text={content}
                onChange={handleEditor}
                options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
            />

            <Button variant="primary">Add post</Button>
        </form>
    );
}


export default PostForm;