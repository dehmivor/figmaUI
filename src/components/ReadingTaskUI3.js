import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs"; // Chevron Icon for "View More"

const ReadingTaskUI3 = () => {
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
          backgroundColor: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <Card.Body className="d-flex align-items-start">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <strong>Jerome Bell</strong>
                <br />
                <span className="text-muted">@whitefish664</span>
              </div>
              <Button variant="outline-primary" size="sm" className="ms-auto">
                Follow
              </Button>
            </div>
            <Card.Title>Constructive and destructive waves</Card.Title>
            <Card.Text className="text-muted small">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Card.Text>
          </div>
        </Card.Body>
      </Card>

      {/* Second Card */}
      <Card
        className="mt-4 mb-4 text-center"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <Card.Body>
          <img
            src="https://via.placeholder.com/60"
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "60px", height: "60px" }}
          />
          <Card.Title>Constructive and destructive waves</Card.Title>
          <Card.Text className="text-muted">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Card.Text>
          <Button
            variant="primary"
            style={{ backgroundColor: "#6b4eff", border: "none" }}
          >
            Continue
          </Button>
        </Card.Body>
      </Card>

      {/* Third Card */}
      <Card
        className="mt-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "20px" }}
      >
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title>Constructive and destructive waves</Card.Title>
            <Card.Text className="text-muted small">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </Card.Text>
            <Card.Text className="text-muted small">
              2 hours 40 minutes
            </Card.Text>
          </div>
          <BsChevronRight size={20} className="text-muted" />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReadingTaskUI3;
