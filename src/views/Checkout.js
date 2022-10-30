import React from "react"
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import Header from "../components/NavBar/Header"
import CartForm from "../components/NavBar/CartForm";
import { CartContext } from "../context/CartContext";
import CompletedOrder from "../components/NavBar/CompletedOrder";
import { getFirestore, collection, addDoc, runTransaction, doc, } from "firebase/firestore";
export default function Checkout () {
  const [data, setData] = React.useState();
  const [orderId, setOrderId] = React.useState();
  const {cart} = React.useContext(CartContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart,
      total: 500,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const productsCollection = collection(db, "items");
    await addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      updateProducts();
    });
  };

  // Batch update de productos una vez generada la orden
  const updateProducts = async () => {
    const db = getFirestore();
    cart.forEach(async (item) => {
      const productRef = doc(db, `items`, item.id);
      await runTransaction(db, async (transaction) => {
        const transfDoc = await transaction.get(productRef);
        if (!transfDoc.exists()) {
          console.error("El documento no existe");
        }
        const newStock = transfDoc.data().stock - item.quantity;
        transaction.update(productRef, { stock: newStock });
      });
    });
  };
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Finalizar compra</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          {orderId ? (
            <CompletedOrder orderId={orderId} data={data}/>
          ) : (
            <CartForm handleChange={handleChange} handleSubmit={handleSubmit} />
          )}
        </Row>
      </Container>
    </div>
  );
}