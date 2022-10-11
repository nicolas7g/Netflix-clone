import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests';
import './Banner.css'

function Banner() {
    const [movie,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)//concatena al valor de axios lo que tenga fetchURL para completar la URL    
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length)]   //busca una peli random para poner como banner
            )
            console.log(Math.round() * request.data.results.length)
            return request;
        }
        fetchData()
    },[])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "...": str;

    }

    // ?.----> primero chequea que el objeto movie no sea null y si no lo es lee la prop title (para evitar errores en tiempo de compilacion) 
  return (
    <header className='Banner'
        style={{backgroundSize: 'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:'center center',
            }}
    >
        <div className='banner__contents'>
            
            <h1 className='banner__title'>{movie?.title || movie?.name}</h1>
        
            <div className='banner__buttons'>
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            
            <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>


        </div>
        <div className='banner--fadeBottom'></div>    
    </header>
  )
}

export default Banner
