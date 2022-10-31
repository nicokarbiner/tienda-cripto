import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Home from "./views/Home"
import Cart from "./views/Cart"
import Products from "./views/Products"
import Category from "./views/Category"
import Product from "./views/Product"
import Checkout from "./views/Checkout"
import Header from "./components/NavBar/Header"
import Footer from "./components/NavBar/Footer"


function App() {
  return (
      <BrowserRouter>
      <CartProvider>
      <Header/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/category/:categoryId" element={<Category/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;