import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './routes';

import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';

// import { Container } from './styles';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />

        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
