import React from 'react';
import { useSelector } from "react-redux";

const PostsCounter = () => {
  const count = useSelector(({ posts }) => posts.length);

  return (
    <div>Posts counter: { count === 0 ? 'No posts' : count }  </div>
  );
}

export default PostsCounter;