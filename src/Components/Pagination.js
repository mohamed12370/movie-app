import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { my_movies } from '../Redux/Action/moviesAction';

const MyPagination = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);

  const handlePageClick = ({ selected }) => {
    dispatch(my_movies(data.word, selected + 1));
    // if (data.word) dispatch(my_movies(data.word, selected + 1));
    // else dispatch(my_movies(data.word, selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={data.pageCount <= 500 ? data.pageCount : 500}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={'pagination justify-content-center py-4'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
    />
  );
};

export default MyPagination;
