import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"

function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      release_date: "1994-09-23",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      release_date: "1972-03-24",
      url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      release_date: "2008-07-18",
      url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("type again clearing this input");
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" className="search-button">search</button>
        
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;