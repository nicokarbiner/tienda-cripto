import React from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Header from "../components/NavBar/Header"
import ItemDetailContainer from "../components/NavBar/ItemDetailContainer"
export default function Product () {
  const {productId} = useParams()
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <ItemDetailContainer title="Mis Criptos" productId={productId} />
          </Col>
        </Row>
      </Container>
    </>
  );
}