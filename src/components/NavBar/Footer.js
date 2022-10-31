import {Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer () {
  return (
    <footer>
      <Card className="text-center">

  <Card.Body>
    <Card.Title> 2022 Tokenizar ©. All Rights Reserved </Card.Title>
    <Card.Text>
      Tokenizar Argentina S.R.L - 20-31531300-6
    </Card.Text>
    <Link to="/"><Button variant="primary">Back to Home</Button></Link>
  </Card.Body>
  <Card.Footer className="text-muted">Nicolas Karbiner - Full Stack Developer</Card.Footer>
</Card>
    </footer>
  )
}