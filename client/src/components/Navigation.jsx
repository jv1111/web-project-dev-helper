import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GOOGLE_SIGNIN_IMG from '../assets/img/google-signin.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authSlice";
import { logoutApi } from "../api/AuthApi";

const Navigation = ({ auth }) => {

    const dispatch = useDispatch();
    const googleLogin = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
    const profileImg = auth.user.profileImg;

    const logoutHandler = async () => {
        const response = await logoutApi();
        dispatch(logout());//logout from redux
    }

    return (
        <div className='navigation'>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Dev-Helper</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Mailer">Mailer</Nav.Link>
                    </Nav>
                    <Nav>
                        {auth.loggedIn ?
                            <NavDropdown className='profile-dropdown' title={
                                <div className='pull-left'>
                                    <img className='profile-img' src={profileImg} alt="" />
                                </div>
                            }
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#logout" onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            :
                            <a href={googleLogin}><img src={GOOGLE_SIGNIN_IMG} alt="Login with google" /></a>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;