import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css"; // Import the CSS file

function Signup() {
  const [uname, setuname] = useState("");
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const add = async (event) => {
    event.preventDefault();
    const data = { uname, pass, email };
    let url = "http://localhost:4000/users/createUser";
    try {
      const res = await axios.post(url, data);
      if (res.status === 201) {
        alert("User Created Successfully");
        navigate("/Year");
      } else {
        console.log("error in user creation");
      }
    } catch (error) {
      alert("error in creation");
      console.log(error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Signup</h1>
        </div>
        <form onSubmit={add} className="auth-form">
          <div className="input-group">
            <label htmlFor="uname">Username</label>
            <input
              type="text"
              id="uname"
              placeholder="Enter your username"
              onChange={(e) => setuname(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              onChange={(e) => setpass(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I have accepted the terms and conditions
            </label>
          </div>
          <button type="submit" className="auth-button">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
