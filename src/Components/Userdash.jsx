import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Assets/Userdash.css';
import NavHome from './NavHome';
import { useSelector } from 'react-redux';

export default function Userdash() {
  const [localStorageItem, setLocalStorageItem] = useState('');
  const [randomBooks, setRandomBooks] = useState([]);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const itemFromLocalStorage = localStorage.getItem('username');
    if (itemFromLocalStorage) {
      setLocalStorageItem(itemFromLocalStorage);
    }

    // Fetching all books from the API
    axios.get('http://localhost:8080/books')
      .then(response => {
        const allBooks = response.data;

        // Get 3 random books from the fetched data
        const randomIndices = getRandomIndices(allBooks.length, 3);
        const selectedBooks = randomIndices.map(index => allBooks[index]);

        setRandomBooks(selectedBooks);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const cartItemCount = cartItems.length;

  // Function to generate random indices within a range
  const getRandomIndices = (maxRange, count) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * maxRange);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  // Extracting cart item names
  const cartItemNames = cartItems.map(item => item.title); // Adjust 'name' to your actual property name for item names

  return (
    <>
      <NavHome />
      <div className="dashboard">
        <div className="user-details">
          <div className="user-photo">
            <img src='https://cdn-icons-png.flaticon.com/512/219/219988.png' alt="User's Photo" style={{ height: '100px', width: '100px' }} />
          </div>
          <div className="user-info">
            <h2>{localStorageItem}</h2>
            <p>Email:{localStorageItem}@gmail.com</p>
            <p>Location: Coimbatore, Tamil Nadu</p>
          </div>
        </div>
        <div className='dashitems'>
          <div className='leftitem'>
            <h1>Favourites</h1>
            <div className='favitem'>
            {randomBooks.map((book, index) => (
                <div key={index} className='book-details'>
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Price: ${book.price}</p>
                </div>
              ))}

            </div>
          </div>
          <div className='rightitem'>
            <div className='prevorder'>
              <h2>Previous Orders</h2>
              {randomBooks.map((book, index) => (
                <div key={index} className='book-details'>
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Price: ${book.price}</p>
                </div>
              ))}
            </div>
            {/* Display cart items */}
            <div className='cartdisp'>
              <h4>Items in Cart: {cartItemCount}</h4>
              {cartItemNames.map((itemName, index) => (
                <li key={index}>{itemName}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
