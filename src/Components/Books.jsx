import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";

function Books() {
  const [books, setBooks] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();

    setAuthenticated(true);
  }, []);

  const loadBooks = async () => {
    try {
      const result = await axios.get(
        "https://storyhaven-backend.onrender.com/books"
      );
      setBooks(result.data);
    } catch (error) {
      alert("Error loading books");
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`https://storyhaven-backend.onrender.com/book/${id}`);
      loadBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Error deleting book. Please try again.");
    }
  };

  const addClick = () => {
    navigate("/addbook");
  };

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="book-list">
          <div className="py-4">
            <table className="table table-striped table-bordered table-responsive">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Price</th>
                  <th scope="col">Reviews</th>
                  <th scope="col">Image</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.price}</td>
                    <td>{book.reviews}</td>
                    <td>
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        style={{ width: "50px", height: "auto" }}
                      />
                    </td>
                    <td>
                      <Link
                        className="btn btn-primary mx-2"
                        to={`/editbook/${book.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
