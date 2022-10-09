import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import Cart from "./views/Cart"
import Products from "./views/Products"
import Category from "./views/Category"
import Product from "./views/Product"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;