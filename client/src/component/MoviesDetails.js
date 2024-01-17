import React, { useEffect, useState } from 'react';
import '../styles/moviesDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MoviesDetails = () => {
    const param = useParams ();
    const [movieDetail,setMovieDetail] = useState ([]);

    const getMovieDetails = async () => {
        try {
            const req = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?language=en-US&api_key=c8d17361de180415e1cb161c9fc45a42`);
            console.log(req.data)
            setMovieDetail(req.data);
        } catch (error) {
            console.log('Error lors de la getting movies!',error)
        }
    }

    useEffect(()=>{
        getMovieDetails();
    },[])


    return (
        <div>
          
                <div className='detailsFilm'>
                    <img src={'https://image.tmdb.org/t/p/w500/'+movieDetail.poster_path} alt='img' />
                    <div>
                        <p>Title : {movieDetail.original_title} </p>
                        <p>Date de création : {movieDetail.release_date}</p>
                        <p>Popularity : {movieDetail.popularity}</p>
                    </div>
                </div>
        
          
                <div className='discriptionFilm'>
                    <p>Discription : {movieDetail.overview}</p>
                </div>
        
            <div className='voirFilm'>
                <a href={movieDetail.homepage} target='_blanck'>
                    <button>Voir Film</button>
                </a>
                
            </div>
        </div>
    );
}

export default MoviesDetails;
