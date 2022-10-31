import ItemListContainer from "../components/NavBar/ItemListContainer";
export default function Home () {
  return (
    <div className="App">
      <h1 >Welcome to Tokenizar</h1>
      <h2 >The best marketplace to buy and sell Criptos</h2>
      <br />
      <ItemListContainer title="What are you looking for?"/>
    </div>
  );
}