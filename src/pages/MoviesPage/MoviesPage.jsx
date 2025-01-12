import   { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery  } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
// console.log(typeof query); ВСЕГДА будет СТРОКА

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesByQuery(query);
      setMovies(data);
    };
    getData();
  }, [query]);
  const handleChangeQuery = newQuery => {
    // 7 убрать query= в юрл сайта
    if (!newQuery) {
      return setSearchParams({});
    }
      searchParams.set("query", newQuery);
      setSearchParams(searchParams);
    }
    const filteredMovies = movies.filter(
        movie => 
            movie.title.toLowerCase().includes(query.toLowerCase())
      );
  return (
  <div>
    <SearchBar handleChangeQuery={handleChangeQuery} query={query}/>
    <MovieList movies={filteredMovies} />

  </div>
)};

export default MoviesPage;
