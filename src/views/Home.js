import ItemListContainer from "../components/NavBar/ItemListContainer";
import Footer from "../components/NavBar/Footer";
import Header from "../components/NavBar/Header";
export default function Home () {
  return (
    <div className="App">
      <Header />
      <h1>Visita nuestra tienda cripto</h1>
      <p>Disfruta de todas las promociones que tenemos para vos</p>
      <ItemListContainer title="Nuestras Criptos" />
      <Footer />
    </div>
  );
}