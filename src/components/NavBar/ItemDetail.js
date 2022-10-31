import React from "react"
import {Card, Button} from "react-bootstrap"
import ItemCounter from "./ItemCounter";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
export default function ItemDetail ({item}) {
  const { addToCart, isInCart } = React.useContext(CartContext);
  const [count, setCount] = React.useState(1)
  
  
  return (
    <Card className="item-detail">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text> {item.text}</Card.Text>
        <h3>$ {item.price}</h3>
        {isInCart(item.id) ? (
          <Link to={"/Cart"}><Button variant="secondary">Go to Cart</Button></Link>
        ) : (
          <ItemCounter
            onSubmit={() => addToCart(item, count)}
            count={count}
            setCount={setCount}
            stock={item.stock}
          />
        )}
      </Card.Body>
    </Card>
  );
}
