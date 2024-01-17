import {allMovies} from '../types/MoviesType';
export const getAllMovies = ()=> {
    return {type:allMovies,data:[],pages:0}
}