import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar1.css";
import { Usecreate } from "../context-user/Usecreate";
const Navabr = ({ color, setcolor }) => {
  const changebg = () => {
    setcolor(color === "dark" ? "light" : "dark");
  };
  const { user, loggedin } = Usecreate();

  return (
    <div
      className="full"
      style={{ backgroundColor: color === "dark" ? "#222" : "#fff" }}
    >
      <div className="layout">
        <div className="auth-buttons">
          {loggedin ? (
            <>
              <Link to="/profile" className="button-link">
                <button className="button">{user}</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/Login" className="button-link">
                <button className="button">Login</button>
              </Link>
              <Link to="/Signup" className="button-link">
                <button className="button">Signup</button>
              </Link>
              <Link to="/Login" className="button-link">
                <button className="button">Developer</button>
              </Link>
            </>
          )}
          <button className="button" onClick={changebg}>
            Change background color
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
