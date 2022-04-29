import React, { Component } from "react";
import { ListGroup, Row, Col, Spinner, Alert } from "react-bootstrap";
import { parseISO, format } from "date-fns";

class ResevationList extends Component {
  state = {
    reservations: [],
    isLoading: true,
    isError: false,
  };
  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async (e) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/reservation"
    );
    try {
      let data = await response.json();

      console.log("body", data);

      if (response.ok) {
        this.setState({
          reservations: data,
          isLoading: false,
          isError: false,
        });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log("error");

      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  render() {
    return (
      <Row className="justify-content-center my-3">
        <Col md={6} className="text-center">
          <h2>Booked Table</h2>
          {this.state.isLoading && (
            <Spinner animation="border" variant="primary" />
          )}
          {this.state.isError && <Alert variant="danger">be careful</Alert>}
          {this.state.reservations.map((res) => (
            <ListGroup key={res._id}>
              <ListGroup.Item key={res._id}>
                {res.name} -{" "}
                {format(parseISO(res.dateTime), "MMMM do yyyy  || HH:mm ")}
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Col>
      </Row>
    );
  }
}

export default ResevationList;
