import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class ReservationForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: 1,
      smoking: false,
      dateTime: "",
      specialRequest: "",
    },
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/reservation",
      {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      let data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("success");
      } else {
        alert("someone happened");
      }
    } catch (error) {
      console.log("error");
      alert("check");
    }
  };

  render() {
    return (
      <Row className="justify-content-center my-5">
        <Col md={6} className="text-center">
          <h2> Book your Table Now</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert your name"
                value={this.state.reservation.name}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      name: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>your phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Insert your phone"
                value={this.state.reservation.phone}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      phone: e.target.value,
                    },
                  })
                }
                // disabled={this.state.reservation.name === "Ahmed"}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>How many are you?</Form.Label>
              <Form.Control
                as="select"
                value={this.state.reservation.numberOfPeople}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      numberOfPeople: e.target.value,
                    },
                  })
                }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Do you smoke"
                checked={this.state.reservation.smoking}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      smoking: e.target.checked,
                    },
                  })
                }
                disabled
              />
              <Form.Check
                type="radio"
                label="Smoking"
                name="smoking-radio"
                checked={this.state.reservation.smoking}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      smoking: e.target.checked,
                    },
                  })
                }
              />

              <Form.Check
                type="radio"
                label="Not Smoking"
                name="smoking-radio"
                checked={!this.state.reservation.smoking}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      smoking: !e.target.checked,
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Insert your phone"
                value={this.state.reservation.dateTime}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      dateTime: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Any special request?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.reservation.specialRequest}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      specialRequest: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default ReservationForm;
