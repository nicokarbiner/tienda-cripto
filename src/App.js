import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home/Home"
import Cart from "./views/Cart/Cart"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Category/category"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:productId" element={<Product />} />
        <Route exact path="/category/:categoryId" element={<Category />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



/* import BasicExample from "./components/NavBar/NavBar";
import './App.css';
import TokenizarInProgress from "./components/NavBar/ItemListContainer"

function App() {
  return (
    <div className="App">
        <BasicExample />
        <TokenizarInProgress/>
    </div>
  );
}

export default App; */
