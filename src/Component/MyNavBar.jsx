import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavBar = ({ payoff, call }) => {
  const location = useLocation();

  console.log(location);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <div
          className={
            location.pathname === "/" ? "nav-brand active" : "nav-brand"
          }
        >
          Strivestaurant - {payoff}
        </div>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/menu">
            <div
              className={
                location.pathname === "/menu" ? "nav-link active" : "nav-link"
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/reservation">
            <div
              className={
                location.pathname === "/reservation"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Reservation
            </div>
          </Link>
          <Link to="/reserved">
            <div
              className={
                location.pathname === "/reserved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Reserved
            </div>
          </Link>
          <Link to="/contact">
            <div
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact {call}
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
