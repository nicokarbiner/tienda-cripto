import React from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import ItemDetailContainer from "../components/NavBar/ItemDetailContainer"

export default function Product () {
  const {productId} = useParams()
  return(
    <Container>
      <Row>
        <Col>
          <ItemDetailContainer title="Mis Cripto" productId={+productId}/>
        </Col>
      </Row>
    </Container>
  )
}