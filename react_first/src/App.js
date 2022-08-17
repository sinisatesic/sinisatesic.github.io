import React from 'react';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = `http://www.omdbapi.com?apikey=6fa300fc`


const movie1 = {
    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        // console.log(data.Search);
        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('shrek');
    }, []);


    return (
       <div className='app'>
        <h1>React Movies</h1>
        
        <div className='search'>
            <input
            placeholder='Search movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search icon"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0
            ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }


    </div>
    );
}

export default App;