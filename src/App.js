import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Apparels from "./pages/Apparels"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import { CartProvider } from "./context/CartContext"
import Checkout from './pages/Checkout';
import Shipping from "./pages/shipping";


import "./App.css"

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apparels" element={<Apparels />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App

