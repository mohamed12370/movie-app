import { ALLMOVIES } from '../Types/moviesTypes';

const initalSate = { movies: [], pageCount: 0 };

const moviesReducer = (state = initalSate, action) => {
  switch (action.type) {
    case ALLMOVIES:
      //console.log(action);
      return {
        movies: action.payload.results,
        pageCount: action.totalPage,
      };
    case 'my_movie':
      //console.log(action);
      return {
        movies: action.payload.results,
        pageCount: action.payload.total_pages,
        word: action.word,
      };
    default:
      return state;
  }
};

export { moviesReducer };
