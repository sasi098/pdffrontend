import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/University.css"; // Import the CSS file

function University() {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(selectedValue);
    }
  };

  return (
    <div className="university-page">
      <div className="university-container">
        <div className="university-header">
          <h4>Hey, this is the university page</h4>
        </div>
        <div className="university-selection">
          <h4>Select a college:</h4>
          <select
            onChange={handleSelectChange}
            defaultValue=""
            className="select-field"
            isLoading
          >
            <option value="" disabled>
              Select a college
            </option>
            <option value="/Year">VIT</option>
            <option value="/Yearpull">Pulla Reddy</option>
            <option value="/page3">Page 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default University;
