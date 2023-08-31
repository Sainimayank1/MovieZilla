import axios from "axios";
import { apiKey } from "../constants/index";

const link = "https://api.themoviedb.org/";
const trendingMoviesEndPoint = `${link}3/trending/movie/day`;
const upcomingMoviesEndPoint = `${link}3/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndPoint = `${link}3/movie/top_rated?api_key=${apiKey}`;
const MovieDetails = `${link}3/movie/`

const apiCal = async (endPoint, params) => {
  const options = {
    method: "GET",
    url: endPoint,
    params: params ? params : {},
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try{
      const resp = await axios.request(options)
      return resp.data;
    }  catch(error) {
    console.error(error);
    return {};
  };
};

export const fetchTrendingMovies =  () => {
  return apiCal(trendingMoviesEndPoint);
};

export const fetchUpcomingMovies = () => {
  return apiCal(trendingMoviesEndPoint);
};

export const fetchTopRatedMovies = () => {
  return apiCal(topRatedMoviesEndPoint);
};

export const fetchMovieDetail = (id) =>
{
    const endPoint =  `${link}3/movie/${id}`;
    return apiCal(endPoint);
}


export const Image500 = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const Image342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const Image185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null;