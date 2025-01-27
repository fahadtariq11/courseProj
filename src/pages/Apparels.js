import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { FaSearch } from "react-icons/fa"

//mock data 
const apparels = [
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
  {
    id: 5,
    name: "Sneakers",
    price: 8999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    name: "Hoodie",
    price: 4999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    name: "Floral Sweater",
    price: 3999,
    image:
      "https://www.tangled-yarn.co.uk/cdn/shop/files/2410-3_2_Mens_Marius_Sweater_Tangled_yarn_UK_2000x.jpg?v=1729866075",
  },
  {
    id: 8,
    name: "Shalwar Kameez",
    price: 3499,
    image:
      "https://cdn.shopify.com/s/files/1/0681/3787/7805/files/2_b4ec4a5f-b192-4416-b74a-b6ccc29adcbf_480x480.jpg?v=1683632115",
  },
]

const Apparels = () => {
  const { addToCart } = useCart()
  const [filter, setFilter] = useState("")

  const filteredApparels = apparels.filter((apparel) => apparel.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="apparels-container">
      <h1 className="apparels-title">Our Apparels</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search apparels..."
          className="search-input"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="product-grid">
        {filteredApparels.map((apparel) => (
          <div key={apparel.id} className="product-card">
            <Link to={`/product/${apparel.id}`} className="product-link">
              <img src={apparel.image || "/placeholder.svg"} alt={apparel.name} className="product-image" />
              <div className="product-info">
                <h2 className="product-name">{apparel.name}</h2>
              </div>
            </Link>
            <button onClick={() => addToCart({ ...apparel, quantity: 1 })} className="add-to-cart-button">
              {apparel.price.toFixed(2)}Rs || Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Apparels

