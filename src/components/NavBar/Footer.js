import {Container, Row, Col} from "react-bootstrap";

export default function Footer () {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={8} lg={4}>
            <p> Derechos Reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}