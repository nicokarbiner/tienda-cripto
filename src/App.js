import NavBar from "./components/NavBar/NavBar";
/* import BasicExample from "./components/NavBar/NavBar"; */
import './App.css';
import React from "react";
import TokenizarInProgress from "./components/NavBar/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={ItemListContainer/>}/>
          <Route path="/category/:id" element={ItemListContainer/>}/>
          <Route path="/item/:id" element={ItemDetailContainer/>}/>
        </Routes>
        {/* <h1>Tokenizar in progress</h1>
         <BasicExample/> 
        <TokenizarInProgress /> */}
      </div>
    </BrowserRouter>
    <footer> Derechos Reservados </footer>
  );
}

export default App