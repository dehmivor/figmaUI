import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Image,
} from "react-bootstrap";

const CreatorUI1 = () => {
  return (
    <Container>
      {/* Header Section */}
      <header className="text-center my-4">
        <h2>Creator you know</h2>
        <div className="avatars d-flex justify-content-center">
          <Image
            src={`${process.env.PUBLIC_URL}/person1.jpg`}
            alt=" 1"
            className="avatar"
          />
          <Image
            src={`${process.env.PUBLIC_URL}/person1.jpg`}
            alt=" 2"
            className="avatar"
          />
          <Image
            src={`${process.env.PUBLIC_URL}/person1.jpg`}
            alt=" 3"
            className="avatar"
          />
          <Image
            src={`${process.env.PUBLIC_URL}/person1.jpg`}
            alt=" 4"
            className="avatar"
          />
        </div>
      </header>

      {/* Search Section */}
      <div className="search mb-4">
        <Form inline className="d-flex justify-content-center">
          <Form.Control
            type="text"
            placeholder="Search Creator"
            className="mr-2"
          />
          <Button variant="primary">Search</Button>
        </Form>
      </div>

      {/* Card Section */}
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between">
          <h3>Constructive and destructive waves</h3>
          <div className="rating">★★☆☆☆</div>
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src="wave.jpg" alt="Wave Image" />
        </Card.Body>
      </Card>

      {/* Ticket Section */}
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

      {/* Creator Info Section */}
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

      {/* Post Section */}
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/person1.jpg`}
          alt="Creator Image"
        />
        <Card.Body>
          <Card.Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Card.Text>
          <div className="post-meta">
            <span>816 Likes</span>
            <span className="mx-2">|</span>
            <span>877 Comments</span>
            <span className="mx-2">|</span>
            <span>185 Shares</span>
          </div>
        </Card.Body>
      </Card>

      {/* Event Card Section */}
      <Card className="mb-4">
        <Row>
          <Col md={4}>
            <Card.Img variant="top" src="/wave.jpg" alt="Wave Image" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <div className="event-time">
                <p>7:00 PM</p>
              </div>
              <Card.Title>Constructive and destructive waves</Card.Title>
              <Card.Text>October 30, 2023</Card.Text>
              <div className="interaction">
                <div className="icon-group d-flex">
                  <div className="icon d-flex align-items-center mr-3">
                    <img src="like-icon.png" alt="Like" className="mr-1" />
                    <span>816</span>
                  </div>
                  <div className="icon d-flex align-items-center mr-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/person1.jpg`}
                      alt="Comment"
                      className="mr-1"
                    />
                    <span>877</span>
                  </div>
                  <div className="icon d-flex align-items-center">
                    <img src="share-icon.png" alt="Share" className="mr-1" />
                    <span>185</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CreatorUI1;
