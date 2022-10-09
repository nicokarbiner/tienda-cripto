import Header from "../components/NavBar/Header";
import ItemListContainer from "../components/NavBar/ItemListContainer";

export default function Products() {
  return (
    <div>
      <Header/>
      <h1>Listado de Todas las Criptos Disponibles</h1>
      <ItemListContainer/>
    </div>
  );
}