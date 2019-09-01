import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounter';
import Posts from '../../features/Posts/Posts';

const PostsPage = () => {
  return (
    <div>
      <PageTitle>Posts list</PageTitle>
      <PostsCounter />
      <Posts />
    </div>
  )
};

export default PostsPage;