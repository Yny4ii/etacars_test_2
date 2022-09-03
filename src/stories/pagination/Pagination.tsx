import React from "react";

export interface PaginationProps {
  paginate: (pageNumber: number) => void;
  currenciesPerPage: number;
  totalCurrency: number;
  currentPage: number;
}

export const Pagination = ({
  paginate,
  currenciesPerPage,
  totalCurrency,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCurrency / currenciesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((e) => (
        <li
          onClick={() => paginate(e)}
          key={e}
          className={`page-item ${e === currentPage ?`selected` : ``}`}
        >
          <a href="#" className="page-link">
            {e}
          </a>
        </li>
      ))}
    </ul>
  );
};
