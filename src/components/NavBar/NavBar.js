import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Tokenizar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <NavDropdown title="Criptos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Criptomonedas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Stable Coins
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Utility Coins</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Conocer mas
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    );
}

export default BasicExample;