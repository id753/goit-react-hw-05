import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchInfoMovie } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const defaultImg = "https://i.work.ua/career_guide/59_b.png";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  //   console.log(movieID);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

  // console.log(location);

  // const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const movie = await fetchInfoMovie(movieId);
      setMovie(movie);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={s.movieDetailsPage}>
      <h1>{movie.title}</h1>
      <Link to={goBackRef.current} className={s.button}>
        GO BACK
      </Link>

      <div className={s.movieContent}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img
            src={defaultImg} // Замените на путь к вашей заглушке
            alt="No image available"
          />
        )}

        <div className="overview">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <nav>
        <NavLink to="cast">MovieCast</NavLink>
        <NavLink to="reviews">MovieReviews</NavLink>
      </nav>

      <div className={s.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
