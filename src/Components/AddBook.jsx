import { useState } from "react";
import axios from "axios"; // Assuming Axios for API requests
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddBook = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    reviews: 0,
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        " http://localhost:8080/book",
        bookData
      );
      console.log("Book added:", response.data);
      navigate("/book");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="form-cont">
          <div>
            <h2>Add a New Book</h2>
          </div>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter book title"
                  value={bookData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  placeholder="Enter author"
                  value={bookData.author}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  placeholder="Enter genre"
                  value={bookData.genre}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  placeholder="Enter price"
                  value={bookData.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formReviews">
                <Form.Label>Reviews</Form.Label>
                <Form.Control
                  type="number"
                  name="reviews"
                  placeholder="Enter reviews"
                  value={bookData.reviews}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formImageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="imageUrl"
                  placeholder="Enter image URL"
                  value={bookData.imageUrl}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
