import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';
import Theme from './costomization/Theme/theme';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
