import React from "react";

function BookShelfChanger({ value, handleChange }) {
  const { title, name } = value;

  return (
    <div className="book-shelf-changer">
      <select value={title} onChange={handleChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option hidden>test</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
