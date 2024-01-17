import {moviesReducer} from '../reducer/MoviesReducer';
import {createStore} from 'redux'
export const store = createStore(moviesReducer)