import { applyMiddleware, createStore } from 'redux';
import { moviesReducer } from '../Reducer/moviesReducer';
import thunk from 'redux-thunk';

export const store = createStore(moviesReducer, applyMiddleware(thunk));
