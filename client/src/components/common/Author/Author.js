import React from 'react';
import PropTypes from 'prop-types';

import './Author.scss';

const Author = ({ children }) => (
    <p>
    {console.log(children)}
    Author: { children }
    </p>
)

Author.propTypes = {
    children: PropTypes.string,
  };

export default Author;