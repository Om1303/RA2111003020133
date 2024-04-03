// AllProductsPage.js
import React, { useState, useEffect } from "react";
import FilterForm from "./FilterForm";
import ProductCard from "./ProductCard";
import { getProducts } from "../services/api";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <FilterForm />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
