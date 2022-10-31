import CartWidget from "./CartWidget";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="textLogo">
            <Link to="/" className="nav-link active" aria-current="page">Tokenizar</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/">
                  Inicio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/products">
                  Criptos
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Category List" id="basic-nav-dropdown">
                  <Link to="/category/criptomoneda" className="nav-link" aria-current="page">CriptoMonedas</Link>
                  <Link to="/category/stablecoins" className="nav-link" aria-current="page">StableCoins</Link>
                  <Link to="/category/utilitycoins" className="nav-link" aria-current="page">UtilityCoins</Link>
                </NavDropdown>
                </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}