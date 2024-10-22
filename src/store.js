// store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk }from 'redux-thunk'; // Middleware for handling async actions
import rootReducer from './reducers/rootReducers'; // Import combined reducers

// Create the Redux store with rootReducer and apply redux-thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;