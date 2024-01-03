import { useState } from 'react';
import axios from 'axios'; // Assuming Axios for API requests
import { useNavigate } from 'react-router-dom';
import '../Assets/AddBook.css'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const AddBook = () => {
  const navigate=useNavigate()
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre:'',
    price: '',
    reviews: 0,
    image: '',
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
      const response = await axios.post('http://localhost:8080/book', bookData);
      console.log('Book added:', response.data);
      navigate("/book")
      
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className='addcont'>
    <Sidebar/>
    <div className='addbook'>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={bookData.title} onChange={handleChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={bookData.author} onChange={handleChange} />
        </label>
        <label>
          Genre:
          <input type="text" name="genre" value={bookData.genre} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={bookData.price} onChange={handleChange} />
        </label>
        <label>
          Reviews:
          <input type="text" name="reviews" value={bookData.reviews} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={bookData.image} onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddBook;
