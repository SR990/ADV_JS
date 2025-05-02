import React, { useContext } from "react";
import { CreateUser } from "./ComponentA";


function ComponentD() {
  const { user } = useContext(CreateUser);

  return (
    <div className="component-d">
      <h2>ComponentD</h2>
      <p className="welcome-msg">Welcome {user}</p>
    </div>
  );
}

export default ComponentD;
