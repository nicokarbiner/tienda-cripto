import Header from "../components/NavBar/Header";
import ItemListContainer from "../components/NavBar/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category() {
  const { categoryId } = useParams();
  console.log(categoryId)
  return (
    <div>
      <Header />
      <h1>Listado de Criptos</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}