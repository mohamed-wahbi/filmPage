import React from "react";
import ReactPaginate from 'react-paginate';

const PaginationNav = ({totPage,filtrePage}) => {
    const handlePageClick = (data)=>{
        console.log(totPage)
        filtrePage(data.selected+1)
    }
    const pageCount= 500;
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}

          />
    </div>
  );
};

export default PaginationNav;
