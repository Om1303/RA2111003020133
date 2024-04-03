import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllProductsPage from "./Components/AllProductsPage";
import ProductDetailsPage from "./Components/ProductDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={AllProductsPage} />
        <Route path="/product/:id" component={ProductDetailsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
