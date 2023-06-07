import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();

  const getMovieDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0ce4c02037f64fc46bc3bbe212618e93&language=en-US`
      );
      //console.log(data);
      setMovie(data);
    } catch (err) {
      console.log('catch error from get flim details ' + err);
    }
  };

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  return (
    <div className="font color-body ">
      <Navbar />
      <Container>
        {movie === '' ? (
          <h2 className="text-center py-4">Locding Film Details</h2>
        ) : (
          <div>
            <Row className="justify-content-center">
              <Col md="12" xs="12" sm="12" className="mt-4 ">
                <div className="card-detalis  d-flex align-items-center ">
                  <img
                    className="img-movie w-30"
                    src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                    alt="ascad"
                  />
                  <div className="justify-content-center text-center  mx-auto">
                    <p className="card-text-details border-bottom">
                      اسم الفيلم: {movie.title}
                    </p>
                    <p className="card-text-details border-bottom">
                      تاريخ الفيلم :{movie.release_date}
                    </p>
                    <p className="card-text-details border-bottom">
                      عدد المقيمين : {movie.vote_count}
                    </p>
                    <p className="card-text-details border-bottom">
                      التقييم :{movie.vote_average}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md="12" xs="12" sm="12" className="mt-1 ">
                <div className="card-story  d-flex flex-column align-items-start">
                  <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">القصة:</p>
                  </div>
                  <div className="text-end px-2">
                    <p className="card-text-story">{movie.overview}</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col
                md="10"
                xs="12"
                sm="12"
                className="mt-2 d-flex justify-content-center py-4"
              >
                <Link to="/">
                  <button
                    style={{ backgroundColor: '#b45b35', border: 'none' }}
                    className="btn btn-primary mx-2"
                  >
                    عوده للرئيسيه
                  </button>
                </Link>
                <a href={movie.homepage} target="_blank">
                  <button
                    style={{ backgroundColor: '#b45b35', border: 'none' }}
                    className="btn btn-primary"
                  >
                    مشاهده الفيلم
                  </button>
                </a>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MovieDetails;
