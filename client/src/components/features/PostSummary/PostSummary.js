import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './PostSummary.scss';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

import cutText from '../../../utils/cutText';
import Author from '../../common/Author/Author';

const PostSummary = ({ id, title, content, author }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <Author>{ author }</Author>
    <HtmlBox>{ cutText(content, 50) }</HtmlBox>
      <Link to = {`/posts/${id}`}>
        <Button variant="primary">
          Read more
        </Button>  
      </Link>
      <Link to = {`/posts/edit/${id}`}>
        <Button variant="info">
          Edit Post
        </Button>  
      </Link>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default PostSummary;