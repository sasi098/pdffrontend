import React from "react";
import se2 from "../images/se2.jpg";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Year1() {
  return (
    <div style={{ backgroundColor: "#b6afb3", minHeight: "100vh" }}>
      <h3>hey this first years page</h3>
      <div style={{ display: "flex", padding: "20px" }} class={Container}>
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
      </div>
    </div>
  );
}

export default Year1;
