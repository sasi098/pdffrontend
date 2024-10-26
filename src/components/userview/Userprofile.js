import React from "react";
import { Usecreate } from "../../context-user/Usecreate";

function Userprofile() {
  const { user } = Usecreate();
  return (
    <div>
      <h4>hey {user} this is still under development</h4>
    </div>
  );
}

export default Userprofile;
