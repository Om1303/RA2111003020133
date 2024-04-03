// ProductDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();

  // Fetch product details based on ID

  return (
    <div>
      <h1>Product Details</h1>
      {/* Display product details */}
    </div>
  );
}

export default ProductDetailsPage;
