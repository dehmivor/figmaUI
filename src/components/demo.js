import React from "react";
import {
  Button,
  Card,
  Col,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";

function Column1() {
  return (
    <div>
      <Row className="mb-3">
        <Col>
          <Card>
            <div className="d-flex align-items-center">
              <span className="me-3">Creator you know</span>
              <div className="d-flex">
                <Image
                  src={`${process.env.PUBLIC_URL}/person1.jpg`}
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
                <Image
                  src={`${process.env.PUBLIC_URL}/person1.jpg`}
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
                <Image
                  src={`${process.env.PUBLIC_URL}/person1.jpg`}
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
                <Image
                  src={`${process.env.PUBLIC_URL}/person1.jpg`}
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <InputGroup className="shadow-sm">
            <FormControl
              placeholder="Search Creator"
              aria-label="Search Creator"
              className="border-0"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="border-0 shadow-sm" style={{ borderRadius: "20px" }}>
            <Row className="g-0">
              <Col md={4}>
                {/* Updated image positioning on the left */}
                <Card.Img
                  src="wave.jpg"
                  className="w-100 h-100"
                  alt="Wave Image"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px 0 0 20px",
                  }}
                />
              </Col>
              <Col md={8}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>Constructive and destructive waves</Card.Title>
                    <Card.Text className="text-muted small">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center">
                    {/* Star Rating */}
                    <div className="star-rating me-3">
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#e4e5e9" }}>★</span>
                    </div>

                    {/* Bookmark */}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="ms-auto"
                    >
                      <BsBookmark />
                    </Button>
                  </div>

                  <Card.Text className="small mt-2">
                    2 hours 40 minutes
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="border-0 shadow-sm" style={{ borderRadius: "20px" }}>
            <Row className="g-0">
              <Col md={4}>
                {/* Updated image positioning on the left */}
                <Card.Img
                  src="wave.jpg"
                  className="w-100 h-100"
                  alt="Wave Image"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px 0 0 20px",
                  }}
                />
              </Col>
              <Col md={8}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>Constructive and destructive waves</Card.Title>
                    <Card.Text className="text-muted small">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center">
                    {/* Star Rating */}
                    <div className="star-rating me-3">
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#FFD700" }}>★</span>
                      <span style={{ color: "#e4e5e9" }}>★</span>
                    </div>

                    {/* Bookmark */}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="ms-auto"
                    >
                      <BsBookmark />
                    </Button>
                  </div>

                  <Card.Text className="small mt-2">
                    2 hours 40 minutes
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body>
          <h5>Ticket</h5>
          <p>Ages 2-12</p>
          <div className="ticket-count d-flex align-items-center">
            <Button variant="secondary">-</Button>
            <span className="mx-2">0</span>
            <Button variant="secondary">+</Button>
          </div>
        </Card.Body>
      </Card>

      <Row className="mb-4">
        <Col md={8} className="d-flex align-items-center">
          <img src="person5.jpg" alt="Creator " className="creator-" />
          <div className="creator-text ml-3">
            <h4>Jerome Bell</h4>
            <p>@whitefish664</p>
          </div>
        </Col>
        <Col md={4}>
          <Button className="follow-btn" variant="primary">
            Follow
          </Button>
        </Col>
      </Row>

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
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="d-flex justify-content-between">
            <span>816</span> <span>877</span> <span>185</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Column1;
