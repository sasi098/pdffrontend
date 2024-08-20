import React from "react";
import { Link } from "react-router-dom";

function Yeartea1() {
  return (
    <div>
      <div>
        <h4>Teacher 1</h4>
      </div>
      <div>
        <Link to="Page2">
          <button>Teacher1</button>
        </Link>
      </div>
    </div>
  );
}

export default Yeartea1;
