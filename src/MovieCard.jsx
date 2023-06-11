import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400-300x300.png'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;