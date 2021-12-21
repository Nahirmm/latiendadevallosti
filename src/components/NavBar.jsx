import './NavBar.css'
import logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar() {

    return (
        <div>
            <Navbar bg="light" variant="light">
                <a href="#inicio"><img src={logo} alt="logo" className="logo" /></a>
                <Container>
                    <Navbar.Brand href="#inicio">La tienda de Vallosti</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#tienda">Tienda</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar


  

  