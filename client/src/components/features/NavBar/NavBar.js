import React,{ useState } from 'react';
import './NavBar.scss';

import MainMenu from '../../layouts/MainMenu/MainMenu';
import Logo from '../../common/Logo/Logo'

const NavBar = () => {
  const [links] = useState([
    { path: '/', title: 'Home' },
    { path: '/posts/new', title: 'Add post' },
    { path: '/posts', title: 'Posts' },
    { path: '/contact', title: 'Contact' }
  ]);

  return (
    <nav className="navbar">
      <Logo />
      <MainMenu links={ links } />
    </nav>
  )
}
export default NavBar;