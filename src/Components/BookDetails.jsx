import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBook from "./NavBook";
import "../Assets/BookDetails.css"; 
import NavHome from "./NavHome";
import { addToCart } from './CartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const BookDetails = () => {
  const selectedBook = useSelector((state) => state.book.selectedBook);
  const dispatch = useDispatch();
  if (!selectedBook) {
    return <p>No book selected.</p>;
  }

  const handleAddToCart = (selectedBook) => {
    dispatch(addToCart(selectedBook)); 
  };


  const { title, author,genre, price, reviews, imageUrl } = selectedBook;

  return (
    <>
      <NavHome/>
      <div className="book-details-container">
        <div className="book-details-card">
          <div className="book-details-image-card">
            <img src={imageUrl} alt={title} className="book-details-image" />
          </div>
          <div className="book-details-info-card">
            <h1>{title}</h1>
            <p>By {author}</p>
            <p>Price: {price}</p>
            <p>Genre: {genre}</p>
            <div className="reviews">
              Reviews:
              {Array.from({ length: reviews }, (_, index) => (
                <span key={index} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
            </div>
            <button className="cart-button" onClick={() => handleAddToCart(selectedBook)}>
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
