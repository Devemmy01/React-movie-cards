import { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'
//  
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=9a9bbd3c';

const movie1 = {
  "Title": "Next on the Flash",
  "Year": "2015",
  "imdbID": "tt4300960",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('the flash')
  },[])

  return(
    <div className="app">
      <h1>MovieWorld</h1>
      <div className="search">
        <input type="text" placeholder='Search for a movie' 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" 
        onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0 
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
      
    </div>
    
  )
}

export default App
