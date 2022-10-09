import NavBar from "./components/NavBar/NavBar";
/* import BasicExample from "./components/NavBar/NavBar"; */
import './App.css';
import React from "react";
import ItemListContainer from "./components/NavBar/ItemListContainer";
import ItemDetailContainer from "./components/NavBar/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar />
          <Routes>
            <Route path="/inicio" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          </Routes>
          <footer> Derechos Reservados </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App