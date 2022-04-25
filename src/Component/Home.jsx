import { Carousel, Container, Row, Col, ListGroup } from "react-bootstrap";
import dishes from "../Data/Menu.json";
import { Component } from "react";
import ReservationForm from "./ReservationForm";
import ReservationList from "./ResevationList";

class Home extends Component {
  state = {
    selectedPasta: null,
  };

  render() {
    return (
      <Container className="my-3">
        <ReservationList />
        <ReservationForm />
        <Row className="justify-content-center">
          <Col md={6}>
            <Carousel onSlide={() => this.setState({ selectedPasta: null })}>
              {dishes.map((dish) => (
                <Carousel.Item key={dish.id}>
                  <img
                    className="d-block w-100"
                    src={dish.image}
                    alt="Third slide"
                    onClick={(e) => this.setState({ selectedPasta: dish })}
                  />
                  <Carousel.Caption>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <ListGroup>
              {this.state.selectedPasta ? (
                this.state.selectedPasta.comments.map((onecomment) => (
                  <ListGroup.Item key={onecomment.id}>
                    {onecomment.comment}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>Click on a pasta to see review</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
