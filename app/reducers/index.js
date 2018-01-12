import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import nav from './nav';

const rootReducer = combineReducers({
  nav,
});

export default rootReducer;
