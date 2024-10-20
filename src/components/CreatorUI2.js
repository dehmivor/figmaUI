import React, { useState } from "react";
import {
  Card,
  Button,
  Image,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const CreatorUI2 = () => {
  const [ticketCount, setTicketCount] = useState(2);

  const handleIncrement = () => setTicketCount(ticketCount + 1);
  const handleDecrement = () =>
    ticketCount > 0 && setTicketCount(ticketCount - 1);

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      {/* Event Card */}
      <Card className="mb-3 p-3" style={{ borderRadius: "16px" }}>
        <Row className="align-items-center">
          <Col xs={3}>
            <Image src="wave.jpg" rounded className="w-100" />
          </Col>
          <Col xs={9}>
            <Card.Title>Constructive and destructive waves</Card.Title>
          </Col>
        </Row>
      </Card>

      {/* Ticket Counter */}
      <Card className="mb-3 p-3" style={{ borderRadius: "16px" }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <strong>Ticket</strong>
            <p className="text-muted m-0">Ages 2-12</p>
          </div>
          <div className="d-flex align-items-center">
            <Button variant="outline-secondary" onClick={handleDecrement}>
              -
            </Button>
            <span className="mx-3">{ticketCount}</span>
            <Button variant="outline-secondary" onClick={handleIncrement}>
              +
            </Button>
          </div>
        </div>
      </Card>

      {/* Profile with Follow Button */}
      <Card
        className="mb-3 p-3 d-flex align-items-center"
        style={{ borderRadius: "16px" }}
      >
        <Row className="align-items-center w-100">
          <Col xs={2}>
            <Image src="person5.jpg" roundedCircle width="40" height="40" />
          </Col>
          <Col xs={7}>
            <div>Jerome Bell</div>
            <small className="text-muted">@whitefish664</small>
          </Col>
          <Col xs={3}>
            <Button variant="primary" size="sm">
              Follow
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Post with Interaction Icons */}
      <Card className="mb-3 p-3" style={{ borderRadius: "16px" }}>
        <Row className="align-items-center">
          <Col xs={2}>
            <Image src="person5.jpg" roundedCircle width="40" height="40" />
          </Col>
          <Col xs={10}>
            <div className="d-flex justify-content-between">
              <div>
                <strong>Jerome Bell</strong>{" "}
                <span className="text-muted">· 2 week ago</span>
              </div>
              <i className="bi bi-three-dots"></i>
            </div>
            <p className="mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="d-flex justify-content-between">
              <span>816</span> <span>877</span> <span>185</span>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Event with Time and Date */}
      <Card className="p-3" style={{ borderRadius: "16px" }}>
        <Row>
          <Col xs={3}>
            <Image src="wave.jpg" rounded className="w-100" />
          </Col>
          <Col xs={9}>
            <div className="d-flex justify-content-between">
              <span className="badge bg-dark text-white">07:00 PM</span>
            </div>
            <Card.Title>Constructive and destructive waves</Card.Title>
            <p className="text-muted">October 30, 2023</p>
          </Col>
        </Row>
      </Card>

      {/* Interaction Icons */}
      <div className="d-flex justify-content-between mt-3">
        <span>816</span> <span>877</span> <span>185</span>
      </div>
    </div>
  );
};

export default CreatorUI2;
