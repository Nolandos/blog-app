import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import 'animate.css/animate.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => (
    <Router>
      <App />
    </Router>
  );

ReactDOM.render(<Root />, document.getElementById('root'));

