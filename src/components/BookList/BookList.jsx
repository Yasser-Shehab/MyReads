import React from "react";
import BookShelf from "../BookShelf/BookShelf";

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
        <a onClick={handleSearch}>Add a book</a>
      </div>
    </div>
  );
}

export default BookList;
