import React from "react";
import SingleBook from "../SingleBook/SingleBook";

function BookShelf({ books, shelf, shelfTitle, handleMoveBook }) {
  const booksBelongToShelf = books.filter((book) => book.shelf === shelf);
  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksBelongToShelf.map((book) => {
              return (
                <SingleBook
                  key={book.id}
                  shelf={shelf}
                  book={book}
                  handleMoveBook={handleMoveBook}
                />
              );
            })}
          </ol>
        </div>
      </div>
      ;
    </>
  );
}

export default BookShelf;
