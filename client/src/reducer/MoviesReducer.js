import {allMovies} from '../types/MoviesType';

export const moviesReducer = (state={movies:[],totPage:0} , action) => {
    switch (action.type) {
        case allMovies : return {movies:action.data , totPage:action.pages} ; 
        default : return state ;    
    }
}