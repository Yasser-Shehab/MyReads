import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookShelfChanger from "../BookShelfChanger/BookShelfChanger";

function SingleBook({ book, shelf, shelfTitle, handleMoveBook }) {
  const [value, setValue] = useState(shelf);
  const { id, authors } = book;
  const handleChange = (event) => {
    setValue(event.target.value);
    handleMoveBook(book, event.target.value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <Link to={`bookDetails/${id}`}>
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`,
              }}
            ></div>
          </Link>
          <BookShelfChanger value={value} handleChange={handleChange} />
        </div>
        <div className="book-title">{shelfTitle}</div>
        <div className="book-authors">{authors && authors.map((name) => name)}</div>
      </div>
    </li>
  );
}

export default SingleBook;
