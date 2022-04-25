import { Navbar, Nav } from "react-bootstrap";

const MyNavBar = ({ payoff, call }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Strivestaurant - {payoff}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#menu">Menu</Nav.Link>
        <Nav.Link href="#reservation">Reservation</Nav.Link>
        <Nav.Link href="#contact">Contact {call}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavBar;
