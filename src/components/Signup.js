import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css"; // Import the CSS file
import img from "../images/back.jpg";

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
    <div className="auth-container" style={{ backgroundImage: `url(${img})` }}>
      <div class="wrapper">
        <form onSubmit={add}>
          <h1>Signup</h1>
          <div class="input-box">
            <input
              type="text"
              id="uname"
              placeholder="Enter your username"
              onChange={(e) => setuname(e.target.value)}
            />
            <i class="bx bxs-user"></i>
          </div>
          <div class="input-box">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div class="input-box">
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              onChange={(e) => setpass(e.target.value)}
            />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="remember-forget">
            <label>
              <input type="checkbox"></input>
              Remember me
            </label>
            {/* <a href="#"> Forgot Password?</a> */}
          </div>
          <button type="submit" class="btn">
            Sign Up
          </button>
          {/* <div class="register-link">
            <p>
              Don't have a account? <a href="#">Register</a>
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
