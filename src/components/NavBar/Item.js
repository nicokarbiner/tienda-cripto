import {useNavigate} from "react-router-dom"
import { Card } from "react-bootstrap";
import AddButton from "./AddButton";
export default function Item({ item }) {
  const navigate = useNavigate()
  return (
      <Card style={{ width: "18rem" }} onClick={() => navigate(`/product/${item.id}`)}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.text}
          </Card.Text>
          <h3>$ {item.price}</h3>
          <AddButton />
        </Card.Body>
      </Card>
  );
}