import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Auth.css"; // Import the CSS file
import img from "../images/back.jpg";

function Login({ name, setname }) {
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
        setname(uname);
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container" style={{ backgroundImage: `url(${img})` }}>
      <div class="wrapper">
        <form onSubmit={check}>
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
              type="password"
              id="pass"
              placeholder="Enter your password"
              onChange={(e) => setpwd(e.target.value)}
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
            Login
          </button>
          <div class="register-link">
            <p>{/* Don't have a account? <a href="#">Register</a> */}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// <div className="auth-page">
//   <div className="auth-container">
//     <div className="auth-header">
//       <h1>Signup</h1>
//     </div>
//     <form onSubmit={add} className="auth-form">
//       <div className="input-group">
//         <label htmlFor="uname">Username</label>
//         <input
//           type="text"
//           id="uname"
//           placeholder="Enter your username"
//           onChange={(e) => setuname(e.target.value)}
//           className="input-field"
//         />
//       </div>
//       <div className="input-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           onChange={(e) => setemail(e.target.value)}
//           className="input-field"
//         />
//       </div>
//       <div className="input-group">
//         <label htmlFor="pass">Password</label>
//         <input
//           type="password"
//           id="pass"
//           placeholder="Enter your password"
//           onChange={(e) => setpass(e.target.value)}
//           className="input-field"
//         />
//       </div>
//       <div className="terms">
//         <input type="checkbox" id="terms" required />
//         <label htmlFor="terms">
//           I have accepted the terms and conditions
//         </label>
//       </div>
//       <button type="submit" className="auth-button">
//         Signup
//       </button>
//     </form>
//   </div>
// </div>
