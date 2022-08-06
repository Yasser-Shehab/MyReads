import React from "react";

function BookShelfChanger({ value, handleChange }) {
  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
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
