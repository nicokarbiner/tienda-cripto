import NavBar from "./components/NavBar/NavBar";
import BasicExample from "./components/NavBar/NavBar";
import './App.css';
import TokenizarInProgress from "./components/NavBar/ItemListContainer"

function App() {
  return (
    <div className="App">
        <NavBar />
      <h1>Tokenizar in progress</h1>
        <BasicExample />
        <TokenizarInProgress/>
    </div>
  );
}