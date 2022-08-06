import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import notFound from "./assets/Images/notFound.jpg";
import { useParams, useNavigate } from "react-router-dom";
import { get } from "../../BooksAPI";

import "./BookDetailsStyle.css";
function BookDetails() {
  const [bookInfo, setBookInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);

  const goToPrevPage = () => {
    navigate(-1);
  };

  const fetchSingleBook = async () => {
    try {
      const bookDetail = await get(params.id);
      console.log(bookInfo);
      if (bookDetail) {
        setBookInfo(bookDetail);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBook();
    console.log(bookInfo);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else {
    return (
      <>
        <PageTitle title="Book Details" />
        <button className="back-button" onClick={goToPrevPage}>
          Back
        </button>
        <article className="book-container">
          <div className="book-details">
            {bookInfo.imageLinks ? (
              <div className="book-image">
                <img src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title} />
              </div>
            ) : (
              <div className="notFound-image">
                <img src={notFound} alt="Cover Not Found" />
              </div>
            )}
            {console.log(bookInfo)}
            <div className="book-Info">
              <div className="details">
                <h3>Book Title :</h3>
                <p>{bookInfo.title}</p>
              </div>
              <div className="details">
                <h3>Categories :</h3>
                {bookInfo.categories ? (
                  bookInfo.categories.map((data) => {
                    return <p>{data}</p>;
                  })
                ) : (
                  <p>None</p>
                )}
              </div>
              {bookInfo.averageRating ? (
                <div className="details">
                  <h3>AverageRating :</h3>
                  <p>{bookInfo.averageRating}</p>
                </div>
              ) : (
                <div className="details">
                  <h3>Page Count :</h3>
                  <p>{bookInfo.pageCount}</p>
                </div>
              )}

              <div className="details">
                <h3>Language :</h3>
                <p>{bookInfo.language.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default BookDetails;
