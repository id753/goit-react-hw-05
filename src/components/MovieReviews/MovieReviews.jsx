import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewMovie } from "../../services/api";

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
              <ul>
                {movieReview.length > 0 ? (
                  movieReview.map((item) => (
                    <li key={item.id}>
                      <p>{item.content}</p>
                      <p>{item.updated_at}</p>

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
