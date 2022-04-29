import dishes from "../Data/Menu.json";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
} from "react-bootstrap";
import { Link, parsePath } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center my-3">
          {dishes.map((dish) => (
            <Col key={dish.id} className="text-center">
              <Card>
                <Link to={"/details/" + dish.id}>
                  <Card.Img variant="top" src={dish.image} />
                </Link>
                <Card.Body className="d-flex">
                  <Card.Title>{dish.row}</Card.Title>
                  <Badge variant="secondary" className="mr-auto">
                    {dish.label}
                  </Badge>
                  <Badge variant="warning">{dish.price}</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
