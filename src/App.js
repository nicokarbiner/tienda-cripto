import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Home from "./views/Home"
import Cart from "./views/Cart"
import Products from "./views/Products"
import Category from "./views/Category"
import Product from "./views/Product"
import PageLoading from "./views/PageLoading"
import Checkout from "./views/Checkout"


function App() {
  return (
      <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/category/:categoryId" element={<Category/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/loader" element={<PageLoading />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;