import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import MyPagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { my_movies } from '../Redux/Action/moviesAction';

const MovieList = () => {
  const { movies } = useSelector((state) => state);
  const dispatch = useDispatch();
  //console.log(movies);

  useEffect(() => {
    dispatch(my_movies());
  }, [dispatch]);

  return (
    <>
      {movies.length >= 1 ? (
        <Row className="mt-3">
          {movies.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
          <MyPagination />
        </Row>
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}
    </>
  );
};

export default MovieList;

/*

<Row className="mt-3">
        {movies.length ? (
          movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
        ) : (
          <h2 className="text-center p-5">لا يوجد افلام...</h2>
        )}
        {movies.length >= 1 ? <MyPagination /> : null}
      </Row>


      {allMovies.length >= 1 ? (
        <Row className="mt-3">
          {allMovies.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
          <MyPagination />
        </Row>
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}

*/
