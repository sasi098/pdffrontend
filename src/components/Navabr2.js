// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar1.css";

// const Navabr2 = ({ name, setname, color, setcolor }) => {
//   const changebg = () => {
//     setcolor(color === "dark" ? "light" : "dark");
//   };
//   return (
//     <div style={{ backgroundColor: color === "dark" ? "#222" : "#fff" }}>
//       <div className="layout">
//         <div className="auth-buttons">
//           <Link to="/Year" className="button-link">
//             <button className="button">Home</button>
//           </Link>
//           <Link to="/Search" className="button-link">
//             <button className="button">Search</button>
//           </Link>
//           <button className="button" onClick={changebg}>
//             Change bg color
//           </button>
//           <Link to={`/Aboutuser?name=${name}`} className="button-link">
//             <button className="button">{name}</button>
//           </Link>
//           <Link to="/" className="button-link">
//             <button className="button">Logout</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navabr2;
