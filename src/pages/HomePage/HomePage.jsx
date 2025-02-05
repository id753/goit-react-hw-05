import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);
  return (
    <div>
      <p
        style={{
          fontSize: "24px",
          textAlign: "center",
          padding: "0",
        }}
      >
        TRENDING MOVIES
      </p>

      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
