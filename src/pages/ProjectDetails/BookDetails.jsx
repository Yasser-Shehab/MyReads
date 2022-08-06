import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./BookDetailsStyle.css";
function BookDetails() {
  return (
    <>
      <PageTitle title="Book Details" />
      <div className="book-container"></div>
    </>
  );
}

export default BookDetails;
