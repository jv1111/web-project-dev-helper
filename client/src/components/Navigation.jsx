import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GOOGLE_SIGNIN_IMG from '../assets/img/google-signin.png';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Dev-Helper</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Mailer">Mailer</Nav.Link>
                    </Nav>
                    <Nav>
                        <a href="#Login"><img src={GOOGLE_SIGNIN_IMG} alt="Login with google" /></a>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;