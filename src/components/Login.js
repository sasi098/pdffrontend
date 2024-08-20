import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css"; // Import the CSS file

function Login() {
  const [uname, setuname] = useState("");
  const [pass, setpwd] = useState("");
  const navigate = useNavigate();

  const check = async (event) => {
    event.preventDefault();
    const data = { uname, pass };
    let url = "http://localhost:4000/users/loginUser";
    try {
      const res = await axios.post(url, data);
      if (res.status === 201) {
        navigate("/University");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>
        <form onSubmit={check} className="auth-form">
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
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              onChange={(e) => setpwd(e.target.value)}
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
