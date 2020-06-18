import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from "redux";
import reducer from './reducers'
import App from './App.jsx';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  "user": {},
  "favorites": [],
  "cards": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  "shoppingCart": [],
  "articles": [
    {
      "id": 2,
      "brand": "brandNew 2",
      "name": "newArticle 2",
      "price": "1000",
      "vendor": "newVendor",
      "condition": "used",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "image": "http://dummyimage.com/800x600.png/99118E/ffffff"
    },
    {
      "id": 3,
      "brand": "brandNew 3",
      "name": "newArticle 3",
      "price": "1000",
      "vendor": "newVendor",
      "condition": "used",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "image": "http://dummyimage.com/800x600.png/99118E/ffffff"
    },
    {
      "id": 4,
      "brand": "brandNew 4",
      "name": "newArticle 4",
      "price": "1000",
      "vendor": "newVendor",
      "condition": "used",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "image": "http://dummyimage.com/800x600.png/99118E/ffffff"
    },
    {
      "id": 5,
      "brand": "brandNew 5",
      "name": "newArticle 5",
      "price": "1000",
      "vendor": "newVendor",
      "condition": "used",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique",
      "image": "http://dummyimage.com/800x600.png/99118E/ffffff"
    }
  ]
};

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
   <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
