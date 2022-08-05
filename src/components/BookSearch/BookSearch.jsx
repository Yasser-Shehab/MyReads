import React, { useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

function BookSearch({ handleSearch, books, handleMoveBook, handleBookSearch }) {
  //Handling Both Change and Search
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleBookSearch(event.target.value);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={handleSearch}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            value={searchTerm}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book) => {
              return (
                <SingleBook
                  key={book.id}
                  shelf={book.shelf ? book.shelf : "none"}
                  book={book}
                  handleMoveBook={handleMoveBook}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
}

export default BookSearch;
