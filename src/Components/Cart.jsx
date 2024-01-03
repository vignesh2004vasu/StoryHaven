import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './CartSlice';
import '../Assets/Cart.css';
import NavHome from './NavHome';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.slice(1));
    return total + price;
  }, 0);

  return (
    <>
      <NavHome />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-details">
                  <img src={item.imageUrl} alt={item.title}></img>
                  <p>{item.title}</p>
                  <p>Price: {item.price}</p>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        )}
        <br/>
        <br/>
        <div className="total-price">
          <p>Total: ₹{totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
