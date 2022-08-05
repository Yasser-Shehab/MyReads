import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { getAll, update, search } from "./BooksAPI";
import { bookshelves } from "./Data/BookShelves";
import BookList from "./components/BookList/BookList";
import debounce from "lodash/debounce";
import BookSearch from "./components/BookSearch/BookSearch";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    setShowSearchpage(!showSearchPage);
  };

  const handleMoveBook = (book, shelf) => {
    update(book, shelf);
    let updatedBooks = books.filter((item) => item.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      updatedBooks = [...updatedBooks, book];
    }
    setBooks(updatedBooks);
  };

  const searchQuery = async (query) => {
    try {
      const searchRes = await search(query);
      setSearchResult(searchRes);
    } catch (error) {
      console.log("Error While Searching");
    }
  };

  const handleBookSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      searchQuery(searchTerm);
    } else if (searchTerm.length === 0) {
      setSearchResult([]);
    }
  };

  // Using Lodash Library to Minimize the Requests going to the server
  const delayedSearch = useCallback(
    debounce((query) => handleBookSearch(query), 600),
    []
  );

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getAll();
        setBooks(booksData);
      } catch (error) {
        console.log("Error Fetching Data");
      }
    };
    fetchBooks();
    console.log(books);
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <BookSearch
          handleSearch={handleSearch}
          handleBookSearch={delayedSearch}
          books={searchResult}
          handleMoveBook={handleMoveBook}
        />
      ) : (
        <BookList
          handleSearch={handleSearch}
          books={books}
          bookshelves={bookshelves}
          handleMoveBook={handleMoveBook}
        />
      )}
    </div>
  );
}

export default App;
