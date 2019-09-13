import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormInput from '../../../utils/myHooks/useFormInput'; // import custom hook;
import './ContactEmail.scss';

//Import Components
import TextField from '../../common/TextField/TextField';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

import { sendEmailRequest, resetRequest } from '../../../redux/postsReducer';

const ContactEmail = () => {
    const dispatch = useDispatch();
    const request = useSelector(({ posts }) => posts.request );
    const address = useFormInput('');
    const subject = useFormInput('');
    const content = useFormInput('');

    useEffect(() => {
        dispatch(resetRequest());
    },[]);

    const sendEmail = (e) => {
        e.preventDefault();

        const email = {
            address: address.value,
            subject: subject.value,
            content: content.value
        } 
        dispatch(sendEmailRequest(email));
    }

    if(request.error) return <Alert variant="error">{request.error}</Alert>
    else if(request.success) return <Alert variant="success">Post has been added!</Alert>
    else if(request.pending) return <Spinner />
    else return (
        <form onSubmit={sendEmail}>
            <TextField
                label="Your Email"
                type="email"
                {...address}
                
            />
            <TextField
                label="Subject"
                {...subject}
            />

            <textarea
                className="message-field"
                placeholder="Write a message..."
                {...content}
            />
            <Button variant="primary">Send Email</Button>
        </form>
    );
}

export default ContactEmail;