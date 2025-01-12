import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from './MovieList.module.css';

const defaultImg =
    "https://i.work.ua/career_guide/59_b.png";

const MovieList = ({movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.movies_list}>
        {movies.map(item => (
            <li key={item.id} className={s.movieItem}>
                <Link to={`/movies/${item.id.toString()}`} state={location} className={s.movieLink}>
                {item.title} 
                
                <img
                     src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : defaultImg}
                    alt={item.title}
                  />
                </Link>
                <p>Release: {item.release_date}</p>
                <p>Vote average: {item.vote_average}</p>
                <p>Popularity: {item.popularity}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
