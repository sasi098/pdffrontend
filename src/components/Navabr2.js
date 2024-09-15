import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar1.css";

const Navabr2 = ({ name, setname, color, setcolor }) => {
  const changebg = () => {
    setcolor(color === "dark" ? "light" : "dark");
  };
  return (
    <div style={{ backgroundColor: color === "dark" ? "#222" : "#fff" }}>
      <div className="layout">
        <div className="auth-buttons">
          <Link to="/Search" className="button-link">
            <button className="button">Search</button>
          </Link>
          <button className="button" onClick={changebg}>
            Change bg color
          </button>
          <button className="button">{name}</button>
        </div>
      </div>
    </div>
  );
};

export default Navabr2;
