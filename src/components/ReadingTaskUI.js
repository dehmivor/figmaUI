import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs"; // Envelope icon

const ReadingTaskUI = () => {
  const tasks = [
    {
      title: "Constructive and destructive waves",
      description: "",
    },
    {
      title: "Constructive and destructive waves",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      title: "destructive waves",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      {/* Header Task */}
      <Card
        className="mb-3 p-3"
        style={{ borderRadius: "16px", backgroundColor: "#F4F4F4" }}
      >
        <Row className="align-items-center">
          <Col xs={1}>
            <BsEnvelope />
          </Col>
          <Col>
            <span className="text-muted">Reading Task</span>
          </Col>
        </Row>
      </Card>

      {/* Task Cards */}
      {tasks.map((task, index) => (
        <Card key={index} className="mb-3 p-3" style={{ borderRadius: "16px" }}>
          <Row className="align-items-start">
            <Col xs={1}>
              <BsEnvelope />
            </Col>
            <Col>
              <h5 className="mb-1">{task.title}</h5>
              {task.description && (
                <p className="text-muted">{task.description}</p>
              )}
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default ReadingTaskUI;
