import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Yeartea2.css"; // Import the CSS file

function Yeartea2() {
  const { category } = useParams();
  const names = {
    db: "Database Managemant",
    cn: "Computer Networks",
    maths3: "Discrete Maths",
    toc: "Theory Of Computation",
    fog: "Fog And Edge Computing",
  };
  const teachers = {
    db: ["dbt1", "dbt2", "dbt3", "dbt4", "dbt5", "dbt6"],
    cn: ["cnt1", "cnt2", "cnt3", "cnt4", "cnt5", "cnt6"],
    maths3: [
      "maths3t1",
      "maths3t2",
      "maths3t3",
      "maths3t4",
      "maths3t5",
      "maths3t6",
    ],
    toc: ["toct1", "toct2", "toct3", "toct4", "toct5", "toct6"],
    fog: ["fogt1", "fogt2", "fogt3", "fogt4", "fogt5", "fogt6"],
  };

  const teacherNames = {
    dbt1: "Teacher1",
    dbt2: "Teacher2",
    dbt3: "Teacher3",
    dbt4: "Teacher4",
    dbt5: "Teacher5",
    dbt6: "Teacher6",
    cnt1: "Dr. Kim",
    cnt2: "Prof. Liu",
    cnt3: "Dr. Wang",
    cnt4: "Prof. Zhang",
    cnt5: "Dr. Chen",
    cnt6: "Prof. Yang",
    maths3t1: "Dr. Patel",
    maths3t2: "Prof. Kumar",
    maths3t3: "Dr. Rao",
    maths3t4: "Prof. Gupta",
    maths3t5: "Dr. Desai",
    maths3t6: "Prof. Mehta",
    toct1: "Dr. Adams",
    toct2: "Prof. Bell",
    toct3: "Dr. Carter",
    toct4: "Prof. Davis",
    toct5: "Dr. Evans",
    toct6: "Prof. Foster",
    fogt1: "Dr. Green",
    fogt2: "Prof. Hall",
    fogt3: "Dr. Harris",
    fogt4: "Prof. King",
    fogt5: "Dr. Lewis",
    fogt6: "Prof. Moore",
  };

  return (
    <div className="yeartea2-container">
      <h3 className="yeartea2-title">Teacher's for {names[category]}</h3>
      <div className="module-page">
        {/* <h3 className="module-title">
          Hey, this is the modules page for {names[category]}
        </h3> */}
        <div className="button-container">
          {teachers[category] &&
            teachers[category].map((teacher, index) => (
              <Link
                to={`/Page2/${teacher}`}
                key={index}
                className="button-link"
              >
                <button className="teacher-button">
                  {teacherNames[teacher]}
                </button>
              </Link>
            ))}
        </div>
        <div className="button-container">
          <Link to={`/Papers2/${category}`}>
            <button>{`${category} papers`}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Yeartea2;
