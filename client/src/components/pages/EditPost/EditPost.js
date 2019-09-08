import React from 'react';
import EditPost from '../../features/EditPostForm/EditPostForm'
const EditPostPage = ({match}) => (
  <div>
    <EditPost match={match} />
  </div>
);

export default EditPostPage;