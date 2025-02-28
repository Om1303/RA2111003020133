// ProductCard.js
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={`images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
      {/* Add a link to view product details */}
    </div>
  );
}

export default ProductCard;
