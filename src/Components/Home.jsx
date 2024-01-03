import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import NavHome from "./NavHome";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Loader from "./Loader"; // Assuming Loader is the component for the loading animation

import Footer from './Footer';
import { selectBook } from './BookSlice';
import { addToCart } from './CartSlice';
import '../Assets/Home.css'

export default function Home() {
  const [localStorageItem, setLocalStorageItem] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.book.searchTerm);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  

  useEffect(() => {
    const itemFromLocalStorage = localStorage.getItem('username');
    if (itemFromLocalStorage) {
      setLocalStorageItem(itemFromLocalStorage);
    }

    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/books");
        setBooks(response.data || []);
        setFilteredBooks(response.data || []);
        
      } catch (error) {
        console.error(error);
        
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    if (books && books.length > 0 && searchTerm) {
      const filtered = books.filter((book) => {
        const title = book.title ? book.title.toLowerCase() : '';
        const genre = book.genre ? book.genre.toLowerCase() : '';
        return title.includes(searchTerm.toLowerCase()) || genre.includes(searchTerm.toLowerCase());
      });
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books);
    }
  }, [searchTerm, books]);



  const handleClick = (book) => {
    dispatch(selectBook(book));
    navigate(`/book/${book.id}`);
  };

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };


  return (
    <>
      <NavHome />

      
      <div className="home-container">
        <span className="dash">
          <h1>Hello {localStorageItem},</h1>
          <br />
          <h2>Looking for Books?</h2>
        </span>
        
        <span className="showcase">
          <h1>Showcase</h1>
          <p>Your Books</p>
          <ol>
            <li>Harry Potter</li>
            <li>Maze Runner</li>
            <li>Hunger Games</li>
            <li>Wimpy Kid</li>
          </ol>
        </span>
      </div>
      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div className="book-item" key={book.id}>
            <img src={book.imageUrl} alt={book.title} onClick={() => handleClick(book)} />
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <p>Price: {book.price}</p>
            <div className="reviews">
              Reviews:
              {Array.from({ length: book.reviews }, (_, index) => (
                <span key={index} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
            </div>
            <button className="cart-button" onClick={() => handleAddToCart(book)}>
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
