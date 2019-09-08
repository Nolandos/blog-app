import React, { useState } from 'react';
import useFormInput from '../../../utils/myHooks/useFormInput'; // import custom hook
import './PostForm.scss';

//Import Components
import TextField from '../../common/TextField/TextField';
import Button from '../../common/Button/Button';

//Imports for Medium editor text
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';


const PostForm = ({title, author, content, handleSubmit}) => {
    const postAuthor = useFormInput(title || '');
    const postTitle = useFormInput(author || '')
    const [text, setContent] = useState(content || '');

    const handleEditor = (text) => {
        setContent(text);
    }

    const setPostValue = () => {
        const post = {
            title: postTitle.value,
            author: postAuthor.value,
            content: text
        } 
        handleSubmit(post);
    } 
     
    return (
        <form onSubmit={setPostValue}>
            <TextField
                label="Title"
                {...postTitle}
                
            />
            <TextField
                label="Author"
                {...postAuthor}
            />

            <Editor
                className="content-editor"
                text={text}
                onChange={handleEditor}
                options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
            />
            {handleSubmit.name === 'addPost' && <Button variant="primary">Add post</Button>}
            {handleSubmit.name === 'editPost' && <Button variant="primary">Edit post</Button>}
        </form>
    );
}


export default PostForm;