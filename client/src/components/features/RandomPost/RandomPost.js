import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import  getRandomInt from '../../../utils/getRandomInt';
import { getRandomPost } from '../../../redux/postsReducer';
import SinglePostForm from '../../common/SinglePostForm/SinglePostForm';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

const RandomPost = () => {
    const dispatch = useDispatch();
    const amount = useSelector(({posts}) => posts.amount);
    const randomPost = useSelector(({posts}) => posts.randomPost);
    const request = useSelector (({posts}) => posts.request);
    const { title, author, content } = randomPost;

    useEffect(() => {
        const randomId = getRandomInt(0, amount);
        dispatch(getRandomPost(randomId));
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
};

export default RandomPost;