import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { store, persistor } from './store';

import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />

          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
