import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
/* import Home from './landings/Home'; */
/* import AppBar from './components/Navbar'; */
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Footer from './components/Footer';
import Tabs from './components/Tabs'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242'
    },
    secondary: {
      main: '#DEDEDE'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <Tabs />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
