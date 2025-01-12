import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {fetchCastMovie } from "../../services/api";
import s from "./MovieCast.module.css";

const defaultImg =
    "https://i.work.ua/career_guide/59_b.png";

const MovieCast = () => {
    const { movieId } = useParams();
    //   console.log(movieID);
      const [movieCast, setMovieCast] = useState(null);

        useEffect(() => {
          const getData = async () => {
            const data = await fetchCastMovie(movieId);
            setMovieCast(data.cast);
            // console.log(data);
            
          };
          getData();
        }, [movieId]);

        if (!movieCast) {
            return <h2>Loading...</h2>;
        }

 return (
    <div>
    <h2>Cast</h2>
    <ul className={s.cast_list}>
      {movieCast.length > 0 ? (
        movieCast.map((actor) => (
          <li key={actor.id} className={s.castItem}>
            <p className={s.castActorName}>{actor.name}</p>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img
                src={defaultImg}
                alt="No image available"
                // style={{ width: "100px" }}
              />
            )}
          </li>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </ul>
  </div>
    );
};

export default MovieCast;
