import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/index.js'
import { Provider } from 'react-redux';
import { ModalProvider } from './components/Modal/Modal';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
