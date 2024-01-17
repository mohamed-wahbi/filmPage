import {moviesReducer} from '../reducer/MoviesReducer';
import {createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
export const store = createStore(moviesReducer,applyMiddleware(thunk));