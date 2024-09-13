// Layout.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css"; // Import the CSS file
import img from "../images/back.jpg";

function Layout() {
  return (
    <div className="auth-container" style={{ backgroundImage: `url(${img})` }}>
      <div className="full">
        <div className="layout">
          <h2>hey welcome</h2>
          <div className="auth-buttons">
            <Link to="/Login" className="button-link">
              <button className="button">Login</button>
            </Link>
            <Link to="/Signup" className="button-link">
              <button className="button">Signup</button>
            </Link>
            <Link to="/Add">
              <button className="button">ADD FILES</button>
            </Link>
            <Link to="/AddLinksForm" className="button-link">
              <button className="button">ADD LINKS</button>
            </Link>
            <Link to="/Addpapers" className="button-link">
              <button className="button">ADD PAPERS</button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
