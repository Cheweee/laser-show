import React from 'react';
import ReactDOM from 'react-dom';

import { createTheme, ThemeProvider } from '@mui/material';
import { deepPurple, amber } from '@mui/material/colors';

import reportWebVitals from './reportWebVitals';

import { App } from './components';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
      primary: deepPurple,
      secondary: amber,
  },
});

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
