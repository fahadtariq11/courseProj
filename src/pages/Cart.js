import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"; // Import icons from react-icons
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // Initialize the navigate function

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout"); // Navigate to the checkout page when the button is clicked
  };

  return (
    <div className="cart">
      <h1 className="page-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <h2 className="item-name">{item.name}</h2>
                  <p className="item-price">{item.price.toFixed(2)}Rs</p>
                  <div className="quantity-control">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="quantity-button"
                    >
                      <FaMinus size={16} />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="quantity-button"
                    >
                      <FaPlus size={16} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>{total.toFixed(2)}Rs</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>{total.toFixed(2)}Rs</span>
            </div>
            {/* Proceed to Checkout Button */}
            <button
              className="checkout-button"
              onClick={handleProceedToCheckout} // Add the onClick event handler
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
