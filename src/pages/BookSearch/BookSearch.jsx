import React, { useState } from "react";
import { Link } from "react-router-dom";
import SingleBook from "../../components/SingleBook/SingleBook";

function BookSearch({ handleSearch, books, storedBooks, handleMoveBook, handleBookSearch }) {
  //Handling Both Change and Search
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleBookSearch(event.target.value);
  };

  const updatedBooks = books.map((book) => {
    storedBooks.map((stored) => {
      if (stored.id === book.id) {
        book.shelf = stored.shelf;
      }
      return stored;
    });
    return book;
  });

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
          {updatedBooks.length > 0 &&
            updatedBooks.map((book) => {
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
