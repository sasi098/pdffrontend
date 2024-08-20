import React from "react";
import { Link } from "react-router-dom";
import "../styles/Year.css"; // Import the CSS file

function Year() {
  return (
    <div className="year-page">
      <div className="year-container">
        <h3>Select Your Year</h3>
        <div className="year-buttons">
          <Link to="/Search">
            <button className="year-button">Search for material</button>
          </Link>
          <Link to="/Year1">
            <button className="year-button">First Year</button>
          </Link>
          <Link to="/Year2">
            <button className="year-button">Second Year</button>
          </Link>
          <Link to="/Year3">
            <button className="year-button">Third Year</button>
          </Link>
          <Link to="/Year4">
            <button className="year-button">Fourth Year</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Year;
