import React, { useState } from "react";

const Paginations = ({ data, itemsPerPage, setCurrentPage, currentPage }) => {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const pages = [];
  if (data === null) {
    pages.push(1);
  } else {
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pages.push(i);
    }
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <p
          key={number}
          id={number}
          onClick={handleClick}
          className={
            currentPage === number
              ? "bg-secondary text-primary w-[29px] h-[29px] text-center rounded-full leading-[29px] "
              : "text-center leading-[29px] w-[29px] h-[29px] hover:text-accent hover:font-medium "
          }
        >
          {number}
        </p>
      );
    } else {
      return null;
    }
  });

  const handleListNextNumber = () => {
    setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  };

  const handleListPrevNumber = () => {
    setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      handleListNextNumber();
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      handleListPrevNumber();
    }
  };

  return (
    <>
      <div className="cursor-pointer ">
        <div className="py-2 text-secondary text-[12px] border-t border-neutral-400 flex justify-center gap-7 items-center">
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            <h1>prev</h1>
          </button>
          {renderPageNumbers}
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            <h1>next</h1>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Paginations;
