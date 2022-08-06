import React, { useState } from "react";
import { Link } from "react-router-dom";
import SingleBook from "../../components/SingleBook/SingleBook";

function BookSearch({ handleSearch, books, handleMoveBook, handleBookSearch }) {
  console.log(books);
  //Handling Both Change and Search
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleBookSearch(event.target.value);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
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
