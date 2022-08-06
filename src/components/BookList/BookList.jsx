import React from "react";
import BookShelf from "../BookShelf/BookShelf";
import { Link } from "react-router-dom";

function BookList({ handleSearch, books, bookshelves, handleMoveBook }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookshelves.map((shelf, index) => {
          return (
            <BookShelf key={index} shelf={shelf} books={books} handleMoveBook={handleMoveBook} />
          );
        })}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default BookList;
