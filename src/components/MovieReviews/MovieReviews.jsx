import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewMovie } from "../../services/api";
import s from "./MovieReviews.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const MovieReviews = () => {
  const { movieId } = useParams();
  //   console.log(movieID);
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewMovie(movieId);
      setMovieReview(data.results);
      console.log(data.results);
    };
    getData();
  }, [movieId]);

  if (!movieReview) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul className={s.moviesRev_list}>
        {movieReview.length > 0 ? (
          movieReview.map((item) => (
            <li key={item.id} className={s.moviesRev_item}>
              <p>{item.content}</p>
              <p>{`Author: ${item.author}`}</p>
              <p>{`Updated: ${formatDate(item.updated_at)}`}</p>
            </li>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
