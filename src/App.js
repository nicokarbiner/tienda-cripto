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
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/category/:categoryId" element={<Category/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;