import React from "react";
import {
  Card,
  Image,
  InputGroup,
  FormControl,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { BsBookmark } from "react-icons/bs"; // For bookmark icon

const CreatorUI = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0ecf5",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="custom-width">
        {/* First Row: Creators you know */}
        <Row className="mb-3">
          <Col>
            <div className="d-flex align-items-center">
              <span className="me-3">Creator you know</span>
              <div className="d-flex">
                <Image
                  src="person1.jpg"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
                <Image
                  src="person2.jpg"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
                <Image
                  src="person3.jpg"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
                <Image
                  src="person4.jpg"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-1"
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Second Row: Search Creator */}
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

        {/* Third Row: Card */}
        <Row>
          <Col>
            <Card
              className="border-0 shadow-sm"
              style={{ borderRadius: "20px" }}
            >
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
                      <Card.Title>
                        Constructive and destructive waves
                      </Card.Title>
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
      </div>
    </div>
  );
};

export default CreatorUI;
