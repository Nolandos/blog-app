import React from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import { BASE_URL, FACEBOOK_API_ID } from '../../../config';
import HtmlBox from '../HtmlBox/HtmlBox';
import Author from '../Author/Author';
import PageTitle from '../PageTitle/PageTitle';

const SinglePost = ({ title, author, content, ...props }) => {
    const { location } = props;

    return (
        <div>
            <FacebookProvider appId="391940735073188">
                <PageTitle>{ title }</PageTitle>
                <ShareButton className="button button--danger" href={`${BASE_URL}${location.pathname}`}>
                    Share
                </ShareButton>
                <Author>{ author }</Author>
                <HtmlBox>{ content }</HtmlBox>
                <Comments href={`${BASE_URL}${location.pathname}`}/>
            </FacebookProvider>
        </div>
    );
}

SinglePost.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>);