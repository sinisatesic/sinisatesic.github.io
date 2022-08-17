// difference between .js and .jsx extension is functionally the same, but .jsx is preferable.
// .jsx extension will add React logo in file structure, and is easy to mark as a React component

import React from 'react';


const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : `https://via.placeholder.com/400`} alt={movie.Title}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;