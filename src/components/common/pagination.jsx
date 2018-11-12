import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { currentPage, pageSize, totalCount, onPagination } = props;
  const numberOfPages = Math.ceil(totalCount / pageSize);
  if (numberOfPages === 1) return null;
  const pages = _.range(1, numberOfPages + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPagination(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onPagination: PropTypes.func.isRequired
};
export default Pagination;
