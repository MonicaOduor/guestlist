import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter as Router } from 'react-router-dom';

import { legacy_createStore as createStore} from 'redux'
import contactReducer from './redux/reducers/contactReducer';
import { Provider } from 'react-redux';

const store = createStore(contactReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const store = createStore(contactReducer, composeWithDevTools)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App />
    </Router>
    </Provider>


  </React.StrictMode>
);


reportWebVitals();
