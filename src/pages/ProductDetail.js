import React from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"

// We'll use the same mock data here. In a real application, you'd fetch this data from an API.
const apparels = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A comfortable and versatile classic t-shirt for everyday wear.",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 5999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Stylish slim fit jeans that offer both comfort and a modern look.",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 19999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A classic leather jacket that adds an edge to any outfit.",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 7999,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A light and breezy summer dress perfect for warm days.",
  },
  {
    id: 5,
    name: "Sneakers",
    price: 8999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Comfortable and stylish sneakers for all-day wear.",
  },
  {
    id: 6,
    name: "Hoodie",
    price: 4999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "A cozy hoodie for those chilly days or relaxed evenings.",
  },
  {
    id: 7,
    name: "Floral Sweater",
    price: 3999,
    image:
      "https://www.tangled-yarn.co.uk/cdn/shop/files/2410-3_2_Mens_Marius_Sweater_Tangled_yarn_UK_2000x.jpg?v=1729866075",
    description: "A vibrant floral sweater to add a pop of color to your wardrobe.",
  },
  {
    id: 8,
    name: "Shalwar Kameez",
    price: 3499,
    image:
      "https://cdn.shopify.com/s/files/1/0681/3787/7805/files/2_b4ec4a5f-b192-4416-b74a-b6ccc29adcbf_480x480.jpg?v=1683632115",
    description: "Classic denim shorts, perfect for casual summer outings.",
  },
]

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = apparels.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return <div className="product-detail-container">Product not found</div>
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-name">{product.name}</h1>
        <p className="product-detail-price">{product.price.toFixed(2)}</p>
        <p className="product-detail-description">{product.description}</p>
        <button onClick={() => addToCart({ ...product, quantity: 1 })} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail

