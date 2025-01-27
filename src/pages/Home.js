import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingBag} from "react-icons/fa";
import heroImage from "../images/hs4.png";

const featuredProducts = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 5999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 19999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 7999,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Discover Your <br />
              <span className="hero-title-highlight">Unique Style</span>
            </h1>
            <p className="hero-description">
              Embrace the latest trends and redefine your wardrobe with our exclusive collection of fashion-forward
              pieces.
            </p>
            <div className="hero-buttons">
              <Link to="/apparels" className="button button-primary">
                Shop Now
                <FaShoppingBag className="button-icon" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={heroImage || "/placeholder.svg"} alt="Fashion Hero" className="hero-image" />
            <div className="hero-image-overlay"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">Welcome to SplitFusion</h2>
          <p className="about-description">
            At SplitFusion, we believe that style is a form of self-expression. Our curated collection of trendy and
            timeless pieces is designed to help you create a wardrobe that truly reflects your personality. From casual
            everyday wear to stunning evening attire, we've got you covered for every occasion.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className="section-title">Top Products Of This Month</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/product/${product.id}`} className="product-link">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Elevate Your Style?</h2>
          <p className="cta-description">
            Explore our full collection and find the perfect pieces to express your unique fashion sense.
          </p>
          <Link to="/apparels" className="button button-primary">
            Shop All Collections
            <FaShoppingBag className="button-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
