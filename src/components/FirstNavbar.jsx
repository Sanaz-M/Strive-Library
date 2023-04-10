import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const FirstNavbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
        <div>Strive Library</div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/">Home</Link>
                <Link to="/register">
                <div>Register</div>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default FirstNavbar
