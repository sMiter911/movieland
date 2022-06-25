import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "http://omdbapi.com?apikey=86c76c70";

// const tempMovie = {
//   Title: "Batman Begins",
//   Year: "2005",
//   imdbID: "tt0372784",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
// };

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    //The request will be as such 'http://omdbapi.com?apikey=86c76c70&s=batman'
    //If title is 'batman'
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); //Convert the response to json

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
