import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import CartItem from "../components/NavBar/CartItem";
import { CartContext } from "../context/CartContext";

export default function Cart () {

  const {cart, deleteAll, cartTotalPrice} = React.useContext(CartContext)

  return (
    !cart.length ? 
    <Container>
      <Row className="empty-cart text-center">
        <Col>
          <h2>Your cart is currently Empty</h2>
            <Link to={"/home"}><FontAwesomeIcon icon={faArrowLeftLong}/>Back to the store</Link>
        </Col>
      </Row>
    </Container> :
      <Container className="mt-3">
          <h1>This Is Your Cart</h1>
          <Row>
            <Col>
            <Row className="text-end">
            <Col><Button onClick={() => deleteAll()}>Delete All Products</Button></Col>
          </Row>
          <Row className="text-end">
          </Row>
            <Table responsive>
              <thead>
              <tr>
                  <th>Item</th>
                  <th></th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => <CartItem item={item} key={item.id}/>)}
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>${cartTotalPrice()}</td>
                  <td><Col><Link to={"/checkout"}><Button variant="success">Checkout</Button></Link></Col></td>
                </tr>
              </tbody>
            </Table>
            </Col>
          </Row>
        </Container>
  )
}