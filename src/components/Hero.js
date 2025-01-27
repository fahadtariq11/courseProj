import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaShoppingBag, FaArrowRight } from "react-icons/fa"
import heroImage from "../images/homepage.png"

const Hero = () => {
  return (
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
            <Link to="/shop" className="button button-primary">
              Shop Now
              <FaShoppingBag className="button-icon" />
            </Link>
            <Link to="/about" className="button button-secondary">
              Learn More
              <FaArrowRight className="button-icon" />
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

      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>
      <div className="hero-blob hero-blob-3"></div>
    </section>
  )
}

export default Hero

