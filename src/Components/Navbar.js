import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useDispatch } from 'react-redux';
import { my_movies } from '../Redux/Action/moviesAction';

const Navbar = () => {
  const dispatch = useDispatch();

  const getSearch = (word) => {
    //console.log(word);
    if (word === '') {
      dispatch(my_movies('', 1));
    } else {
      dispatch(my_movies(word, 1));
    }
  };

  return (
    <div className="nav-style w-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row className="">
          <Col xs="3" lg="2">
            <Link to="/">
              <img className="logo" src={logo} alt="Home" />
            </Link>
          </Col>
          <Col xs="9" lg="10" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                type="search"
                className="form-control"
                placeholder="ابحث"
                onChange={(e) => getSearch(e.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
