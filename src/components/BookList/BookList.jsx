import React from "react";
import BookShelf from "../BookShelf/BookShelf";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

function BookList({ handleSearch, books, bookshelves, handleMoveBook }) {
  return (
    <div className="list-books">
      <PageTitle title="My Reads" />
      <div className="list-books-content">
        {bookshelves.map((shelf, index) => {
          return (
            <BookShelf
              key={index}
              shelf={shelf.title}
              shelfTitle={shelf.name}
              books={books}
              handleMoveBook={handleMoveBook}
            />
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
