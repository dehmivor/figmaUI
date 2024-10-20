import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { BsBookmark, BsStarFill, BsStar } from "react-icons/bs"; // Icons from react-icons

const ReadingTaskUI2 = () => {
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
        <Card.Body>
          <div className="mb-2">
            <Badge bg="dark">07:00 PM</Badge>
          </div>
          <Card.Title>Constructive and destructive waves</Card.Title>
          <Card.Text className="text-muted">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Second Card with Image */}
      <Card
        className="mt-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "20px" }}
      >
        <div style={{ position: "relative", borderRadius: "20px 20px 0 0" }}>
          <Card.Img
            src="wave.jpg"
            alt="Waves"
            style={{ borderRadius: "20px 20px 0 0" }}
          />
          <Badge
            bg="dark"
            style={{ position: "absolute", top: "10px", left: "10px" }}
          >
            07:00 PM
          </Badge>
        </div>
        <Card.Body>
          <Card.Title>Constructive and destructive waves</Card.Title>
          <Card.Text className="text-muted">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </Card.Text>
          <Card.Text className="text-muted small">2 hours 40 minutes</Card.Text>

          {/* Star Rating */}
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <BsStarFill className="text-warning" />
              <BsStarFill className="text-warning" />
              <BsStarFill className="text-warning" />
              <BsStar className="text-muted" />
              <BsStar className="text-muted" />
            </div>

            {/* Bookmark Icon */}
            <BsBookmark className="text-muted" style={{ cursor: "pointer" }} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReadingTaskUI2;
