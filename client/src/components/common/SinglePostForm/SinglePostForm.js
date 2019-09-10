import React from 'react';
import PropTypes from 'prop-types';
import HtmlBox from '../HtmlBox/HtmlBox';
import Author from '../Author/Author';
import PageTitle from '../PageTitle/PageTitle';

const SinglePost = ({ title, author, content }) => {
    return (
        <div>
            <PageTitle>{ title }</PageTitle>
            <Author>{ author }</Author>
            <HtmlBox>{ content }</HtmlBox>
        </div>
    );
}

SinglePost.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default SinglePost;