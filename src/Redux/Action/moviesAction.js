import axios from 'axios';
import { ALLMOVIES, all_movies, search_movies } from '../Types/moviesTypes';

export const my_movies = (word = '', page = 1) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `${
        word
          ? search_movies + `&query=${word}&page=${page}`
          : all_movies + `&page=${page}`
      }`
    );
    dispatch({ type: 'my_movie', payload: data, word });
  };
};

export const getAllMovie = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=0ce4c02037f64fc46bc3bbe212618e93&page=1&language=ar`
      );
      //console.log(data);
      dispatch({
        type: ALLMOVIES,
        payload: data,
        totalPage: data.total_pages,
      });
    } catch (err) {
      console.log(
        'catch error from getAllMovies in action/moviesAction file ',
        err
      );
    }
  };
};

export const getSearchMovie = (word) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0ce4c02037f64fc46bc3bbe212618e93&language=ar&query=${word}`
      );
      //console.log(data);
      dispatch({
        type: ALLMOVIES,
        payload: data,
        totalPage: data.total_pages,
      });
    } catch (err) {
      console.log(
        'catch error from getSearchMovies in action/moviesAction file ',
        err
      );
    }
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`
    );

    dispatch({
      type: ALLMOVIES,
      payload: data,
      totalPage: data.total_pages,
    });
  };
};
