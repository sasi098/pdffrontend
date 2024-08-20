import React from "react";
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "../styles/Search.css";

function Search() {
  const options = [
    { value: "/Yeartea2/db", label: "Database Management" },
    { value: "/Yeartea2/cn", label: "Computer Networks" },
    { value: "/Yeartea2/maths3", label: "Discrete Maths" },
    { value: "/Yeartea2/toc", label: "Theory Of Computation" },
    { value: "/Yeartea2/fog", label: "Fog And Edge Comuting" },

    { value: "/Yeartea3/se", label: "Software Engineering" },
    { value: "/Yeartea3/ai", label: "Artificial Intelligence" },
    { value: "/Yeartea3/aws", label: "Amazon Web Services" },
    { value: "/Yeartea3/wearable", label: "Wearable Computing" },
    { value: "/Yeartea3/daa", label: "Design And Analysis Of Algorithms" },
  ];

  const navigate = useNavigate();
  const [selectedoption, setselectedoption] = useState(null);

  const handlechange = (selectedoption) => {
    setselectedoption(selectedoption);
    if (selectedoption) {
      navigate(selectedoption.value);
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Search Bar</h2>
      <div className="search-bar">
        <Select
          options={options}
          value={selectedoption}
          onChange={handlechange}
          classNamePrefix="react-select"
          isLoading
        />
      </div>
    </div>
  );
}

export default Search;
