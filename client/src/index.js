import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import 'animate.css/animate.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

