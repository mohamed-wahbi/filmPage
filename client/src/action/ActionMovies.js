import {allMovies,getMoviApi} from '../types/MoviesType';
import axios from 'axios';
export const getAllMovies = ()=> {
    return async (dispach) =>{
        const res = await axios.get(getMoviApi);
        dispach ({type:allMovies,data:res.data.results,pages:0});
    }
    
}