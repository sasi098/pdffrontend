import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

function Aboutuser() {
  const [name, setname] = useState("");
  const location = useLocation();

  useEffect(() => {
    const query = queryString.parse(location.search);
    setname(query.name);
  }, [location.search]);

  return (
    <div>
      <h1 className="text-gray-400">Hey {name}</h1>
      <h3 className="text-gray-400">in working</h3>
    </div>
  );
}

export default Aboutuser;
