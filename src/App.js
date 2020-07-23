import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

// import { Container } from './styles';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
