import React, { useState, useEffect } from "react";
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";

function SingleBook({ book, shelf, handleMoveBook }) {
  const [value, setValue] = useState(shelf);
  const { id, title, authors } = book;
  const handleChange = (event) => {
    setValue(event.target.value);
    handleMoveBook(book, event.target.value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <BookShelfChanger value={value} handleChange={handleChange} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.map((name) => name)}</div>
      </div>
    </li>
  );
}

export default SingleBook;
