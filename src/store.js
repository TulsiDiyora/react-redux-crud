// import {createStore, composeExtension} from 'redux'
// import mainRedux from './Services/redux/index.js'
// import { thunk } from 'redux-thunk';

// const composeExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(mainRedux, composeExtension(applyMiddleware(thunk)) )

// export default store


import { createStore, applyMiddleware, compose } from 'redux';
import mainRedux from './Services/redux/index.js';
import {thunk} from 'redux-thunk';  // thunk should not be imported within curly braces

// Use Redux DevTools extension if available, otherwise fallback to a no-op
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainRedux,
  composeEnhancers(applyMiddleware(thunk))  // Applying both thunk and Redux DevTools
);

export default store;
