import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layouts/MainLayout/MainLayout';
//Import routes components
import Home from './components/pages/Home/Home';
import Posts from './components/pages/Posts/Posts';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import NewPost from './components/pages/NewPost/NewPost';
import SinglePost from './components/pages/SinglePost/SinglePost';
import EditPost from './components/pages/EditPost/EditPost';
import RandomPost from './components/pages/RandomPost/RandomPost';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/posts" exact component={ Posts } />
        <Route path="/posts/new" exact component={ NewPost } />
        <Route path="/posts/randomPost" exact component={ RandomPost } />
        <Route path="/posts/edit/:id" exact component={ EditPost } />
        <Route path="/posts/:id" exact component={ SinglePost } />
        <Route path="/contact" exact component={ Contact } />
        <Route component={ NotFound } />
      </Switch>
    </MainLayout>
  );
}

export default App;
