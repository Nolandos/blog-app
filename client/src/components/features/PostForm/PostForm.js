import React, { useState } from 'react';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';

//Imports for Medium editor text
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

const PostForm = () => {
   
    return (
        <div>
            <TextField
                label="Title"
                value={title}
                onChange={changeTitle}
            />
            <TextField
                label="Author"
                value=''
                onChange={useInput}
            />

            <Editor
                className="content-editor"
                
                options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
            />

            <Button variant="primary">Add post</Button>
        </div>
    );
}


export default PostForm;