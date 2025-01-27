import React from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { FaShoppingCart } from "react-icons/fa"
import logo from "../images/logo.png" // 

const Header = () => {
  const { cart } = useCart()

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="SplitFusion Logo" className="logo-image" />
          <Link to="/" className="logo-text">
            Split Fusion
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/apparels" className="nav-link">
            Apparels
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            <FaShoppingCart size={24} />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

