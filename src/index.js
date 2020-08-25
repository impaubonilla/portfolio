import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom'
import './index.scss';
import App from './App';
import Theme from './costomization/Theme/theme';

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={Theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('root')
);
