import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.scss';
import App from './App';
import Theme from './costomization/Theme/theme'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
