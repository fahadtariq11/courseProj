import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Correctly importing the hook
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart(); // Only use clearCart instead of setCart directly
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // To show a loading state during the API call

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic validation
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.address) newErrors.address = 'Address is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true); // Start loading when form is submitted

      try {
        // Making API call (using a mock API)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            address: formData.address,
            cartItems: cart,
          }),
        });

        // Check if the response is successful
        if (response.ok) {
          const data = await response.json();
          console.log('Order placed successfully:', data);
          alert('Order placed successfully!');
          clearCart(); // Clear cart after placing the order
          navigate('/'); // Redirect to home page
        } else {
          // Handle non-2xx responses
          throw new Error(`API error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert(`There was an error placing your order: ${error.message}. Please try again later.`);
      } finally {
        setLoading(false); // Stop loading after API call completes
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Reset error for the input being modified
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price * item.quantity} Rs</p>
          </div>
        ))}
        <h2>Total Price: {totalPrice.toFixed(2)} Rs</h2>
      </div>

      {/* Checkout form */}
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? 'error-input' : ''}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
