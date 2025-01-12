import axios from "axios";
// 1 Данный код выполняет запрос к API с использованием библиотеки axios.
// axios.defaults.baseURL задает базовый URL для всех последующих запросов
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDhhZDI1ZWFmY2ZiMzgyMjhkMmMzMmNiNzgwZDNhZiIsIm5iZiI6MTczNjUyNDY3OS4xNTkwMDAyLCJzdWIiOiI2NzgxNDM4NzQ0ZDY0OWZmYWU3YjgwNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.D3wDE8UsfVrKw09YVcPoL7erx2_ceWS56eyaEibSBrw";
// b08ad25eafcfb38228d2c32cb780d3af
// 2 конкотинация будет с
// export const fetchAllUsers — экспортируемая асинхронная функция, которую можно использовать в других модулях.
// выполняется асинхронно, то есть не блокирует выполнение остальной части программы, пока она не завершится
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};
export const fetchInfoMovie = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      query,
    },
  });
  return data.results;
};

export const fetchCastMovie = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return data;
};

export const fetchReviewMovie = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
  
    return data;
  };
  
