import React from "react";

export interface PaginationProps {
  limit: number;
  currentPage: number;
  pagination: (page: number) => void;
}

export const Pagination = ({
  limit,
  currentPage,
  pagination,
}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= limit; i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination" data-cy={"pagination"}>
      {pageNumbers.map((e) => (
        <li
          onClick={() => pagination(e)}
          key={e}
          className={`page-item ${e === currentPage ? `selected` : ``}`}
          data-cy={"page-item"}
        >
          <a href="#" className="page-link">
            {e}
          </a>
        </li>
      ))}
    </ul>
  );
};
