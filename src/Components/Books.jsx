import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/Book.css";
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
      const result = await axios.get("http://localhost:8080/books");
      setBooks(result.data);
    } catch (error) {
      alert("Error loading books");
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/book/${id}`);
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
    <div >

        <Navbar />
        <div className="book-container">
        <Sidebar addClick={addClick} />
          <div className="py-4">
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Price</th>
                  <th scope="col">Reviews</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    {/* <td>{book.id}</td> */}
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    <td>{book.price}</td>
                    <td>{book.reviews}</td>
                    <td>
                     
                     <div className="actionbtn">
                    
                      {authenticated && (
                        <Link
                          className="btn-primary mx-2"
                          to={`/editbook/${book.id}`}
                        >
                          Edit
                        </Link>
                      )}
                      <button
                        className="btn-danger mx-2"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Books;
