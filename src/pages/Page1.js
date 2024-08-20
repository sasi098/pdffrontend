import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import ai from "../images/ai.jpg";
import se2 from "../images/se2.jpg";
import daa from "../images/daa.jpg";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div>
      <h2>hey this is page1</h2>
      <div id="r1" style={{ padding: "20px" }}>
        <p>hey this is row 1</p>
        <div
          id="r1"
          style={{ display: "flex", padding: "20px" }}
          class={Container}
        >
          <div style={{ padding: "30px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ai} />
              <Card.Body>
                <Card.Title>AI</Card.Title>
                <Card.Text>
                  AI
                  <br />
                  sem:5 <br />
                  credits:3
                </Card.Text>
                <Link to="/page2">
                  <Button variant="primary">modules</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div style={{ padding: "30px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={se2} />
              <Card.Body>
                <Card.Title>software engnieering</Card.Title>
                <Card.Text>
                  software engnieering
                  <br />
                  sem:5 <br />
                  credits:3
                </Card.Text>
                <Link to="/page2">
                  <Button variant="primary">modules</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div style={{ padding: "30px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={daa} />
              <Card.Body>
                <Card.Title>DESIGN AND ANLYSIS</Card.Title>
                <Card.Text>
                  DAA
                  <br />
                  sem:4 <br />
                  credits:3
                </Card.Text>
                <Link to="/page2">
                  <Button variant="primary">modules</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
