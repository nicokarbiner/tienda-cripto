import {Link, useNavigate} from "react-router-dom"
import { Row, Col, Image, Button } from "react-bootstrap";
import AddButton from "./AddButton";
export default function ItemCart({ item }) {
  const navigate = useNavigate()
  return (
        <Row className="cart-item">
          <Col xs={2}>
            <Image src={item.image} />
          </Col>
          <Col xs={10}>
            <h2>{item.title}</h2>
            <p>
                {item.text}
            </p>
            <h3>$ {item.price}</h3>
          </Col>
        </Row>
  );
}