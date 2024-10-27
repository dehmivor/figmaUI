import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const ReadingTask = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        backgroundColor: "#f0ecf5",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* First Card */}
      <Card
        className="mb-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#f4f3f8",
          borderRadius: "20px",
        }}
      >
        <Card.Body>
          <Card.Text className="text-muted small">Reading Task</Card.Text>
          <Card.Title className="mb-4">
            Constructive and destructive waves
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <i className="bi bi-envelope"></i> Item
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="bi bi-envelope"></i> Item
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="bi bi-envelope"></i> Item
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="bi bi-envelope"></i> Item
            </ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="primary"
              style={{
                backgroundColor: "#dcd3ff",
                color: "#5e2eff",
                border: "none",
              }}
            >
              Continue
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Second Card */}
      <Card
        className="mt-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "20px" }}
      >
        <Card.Body>
          <div className="mb-2">
            <span className="badge bg-dark">07:00 PM</span>
          </div>
          <Card.Title>Constructive and destructive waves</Card.Title>
          <Card.Text className="text-muted">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReadingTask;
