import React from "react";
import se2 from "../images/se2.jpg";
import aws from "../images/aws.jpeg";
import ai from "../images/ai.jpg";
import discrete from "../images/discrete.jpeg";
import wearable from "../images/wearable.jpeg";
import daa from "../images/daa.jpg";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Year3() {
  return (
    <div style={{ backgroundColor: "#b6afb3", minHeight: "100vh" }}>
      <h3 style={{ textAlign: "center" }}>hey this third years page</h3>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={se2} />
            <Card.Body>
              <Card.Title>software engineering</Card.Title>
              <Card.Text>
                software engineering
                <br />
                sem:5 <br />
                credits:3
              </Card.Text>
              <Link to="/Yeartea3/se">
                <Button variant="primary">modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={aws} />
            <Card.Body>
              <Card.Title>Amazom Web Service</Card.Title>
              <Card.Text>
                AWS
                <br />
                sem:5 <br />
                credits:3
              </Card.Text>
              <Link to="/Yeartea3/aws">
                <Button variant="primary">modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={discrete} />
            <Card.Body>
              <Card.Title>Discrete Maths</Card.Title>
              <Card.Text>
                Discrete Maths
                <br />
                sem:5 <br />
                credits:3
              </Card.Text>
              <Link to="/Yeartea2/maths3">
                <Button variant="primary">modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ai} />
            <Card.Body>
              <Card.Title>Artificial Intelligence</Card.Title>
              <Card.Text>
                AI
                <br />
                sem:5 <br />
                credits:3
              </Card.Text>
              <Link to="/Yeartea3/ai">
                <Button variant="primary">modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={wearable} />
            <Card.Body>
              <Card.Title>Wearable Computing</Card.Title>
              <Card.Text>
                wearable
                <br />
                sem:5 <br />
                credits:3
              </Card.Text>
              <Link to="/Yeartea3/wearable">
                <Button variant="primary">modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={daa} />
            <Card.Body>
              <Card.Title>Design Analysis Of Algorithms</Card.Title>
              <Card.Text>
                DAA
                <br />
                sem:5 <br />
                credits:3
              </Card.Text>
              <Link to="/Yeartea3/daa">
                <Button variant="primary">modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Year3;
