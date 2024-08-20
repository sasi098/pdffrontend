import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/Yeartea2.css"; // Import the CSS file

function Yeartea3() {
  const { category } = useParams();
  const names = {
    se: ["set1", "set2", "set3", "set4", "set5", "set6", "set7"],
    aws: ["awst1", "awst2", "awst3", "awst4", "awst5", "awst6", "awst7"],
    ai: ["ait1", "ait2", "ait3", "ait4", "ait5", "ait6", "ait7"],
    wearable: [
      "weart1",
      "weart2",
      "weart3",
      "weart4",
      "weart5",
      "weart6",
      "weart7",
    ],
    daa: ["daat1", "daat2", "daat3", "daat4", "daat5", "daat6", "daat7"],
  };

  const head = {
    se: "Software engnieering",
    aws: "Amazon Web Service",
    daa: "Design And Analysis Of Algorithms",
    ai: "Artificial Intelligence",
    wearable: "Wearable Computing",
  };

  const teachernames = {
    set1: "teacher1",
    set2: "teacher2",
    set3: "teacher3",
    set4: "teacher4",
    set5: "teacher5",
    set6: "teacher6",
    set7: "teacher7",
    awst1: "teacher1",
    awst2: "teacher2",
    awst3: "teacher3",
    awst4: "teacher4",
    awst5: "teacher5",
    awst6: "teacher6",
    awst7: "teacher7",
    ait1: "teacher1",
    ait2: "teacher2",
    ait3: "teacher3",
    ait4: "teacher4",
    ait5: "teacher5",
    ait6: "teacher6",
    ait7: "teacher7",
    weart1: "teacher1",
    weart2: "teacher2",
    weart3: "teacher3",
    weart4: "teacher4",
    weart5: "teacher5",
    weart6: "teacher6",
    weart7: "teacher7",
    daat1: "teacher1",
    daat2: "teacher2",
    daat3: "teacher3",
    daat4: "teacher4",
    daat5: "teacher5",
    daat6: "teacher6",
    daat7: "teacher7",
  };
  return (
    <div className="yeartea2-container">
      <h3 className="yeartea2-title">Teachers' names for {head[category]}</h3>
      <div className="module-page">
        {/* <h3 className="module-title">
          Hey, this is the modules page for {head[category]}
        </h3> */}
        <div className="button-container">
          {names[category] &&
            names[category].map((name, index) => (
              <Link to={`/Page3/${name}`} key={index} className="button-link">
                <button className="teacher-button">{teachernames[name]}</button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Yeartea3;
