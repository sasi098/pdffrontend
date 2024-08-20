import React from "react";
import db1 from "../images/db1.jpg";
import cn1 from "../images/cn1.jpeg";
import maths3 from "../images/maths3.jpeg";
import toc from "../images/toc.jpeg";
import fog from "../images/fog.jpeg";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Year2() {
  return (
    <div style={{ backgroundColor: "#b6afb3", minHeight: "100vh" }}>
      <h3 style={{ textAlign: "center" }}>Hey, this is the second year page</h3>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={db1} />
            <Card.Body>
              <Card.Title>DataBase Management</Card.Title>
              <Card.Text>
                Database
                <br />
                Semester: 4 <br />
                Credits: 3 <br />
                <h5>You have a lab for this</h5>
              </Card.Text>
              <Link to="/Yeartea2/db">
                <Button variant="primary">Modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={cn1} />
            <Card.Body>
              <Card.Title>Computer Networks</Card.Title>
              <Card.Text>
                Computer Networks
                <br />
                Semester: 3 <br />
                Credits: 3
                <br />
                <h5>You have a lab for this</h5>
              </Card.Text>
              <Link to="/Yeartea2/cn">
                <Button variant="primary">Modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={maths3} />
            <Card.Body>
              <Card.Title>Maths</Card.Title>
              <Card.Text>
                Discrete Maths
                <br />
                Semester: 3 <br />
                Credits: 4
                <br />
              </Card.Text>
              <Link to="/Yeartea2/maths3">
                <Button variant="primary">Modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={toc} />
            <Card.Body>
              <Card.Title>TOC</Card.Title>
              <Card.Text>
                TOC
                <br />
                Semester: 4 <br />
                Credits: 3
                <br />
              </Card.Text>
              <Link to="/Yeartea2/toc">
                <Button variant="primary">Modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div style={{ padding: "30px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={fog} />
            <Card.Body>
              <Card.Title>FOG</Card.Title>
              <Card.Text>
                FOG
                <br />
                Semester: 4 <br />
                Credits: 3
                <br />
              </Card.Text>
              <Link to="/Yeartea2/fog">
                <Button variant="primary">Modules</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <Link to="/Yeartea2/db">
          <Button variant="primary">Teacher2</Button>
        </Link>
      </div>
    </div>
  );
}

export default Year2;
