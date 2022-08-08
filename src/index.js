import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store, {Persistor} from './redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={Persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>  
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
