import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import dishes from "../Data/Menu.json";
import { useEffect, useState } from "react";

const Details = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [dishDetail, setDishDetail] = useState(null);
  useEffect(() => {
    let selectedDish = dishes.find(
      (dish) => dish.id.toString() === params.dishID
    );
    console.log(selectedDish);

    if (!selectedDish) {
      navigate("/");
    } else {
      setDishDetail(selectedDish);
    }
  }, []);

  return (
    <div>
      <Container>
        <Row className="justify-conter-center"></Row>
        <Row className="justify-content-center">
          <Col className="text-center" md={6}>
            {dishDetail && (
              <>
                <h1>{dishDetail.category.toUpperCase()}</h1>
                <Card>
                  <Card.Img src={dishDetail.image} />
                  <Card.Body>
                    <Card.Title>{dishDetail.name}</Card.Title>
                    <Card.Text>{dishDetail.description}</Card.Text>
                    <Link to="/menu">
                      <Button variant="primary">Another Pasta 🍝 </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
