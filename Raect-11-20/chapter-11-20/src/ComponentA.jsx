import ComponentB from "./ComponentB";
import React, { useState, createContext } from "react";


export const CreateUser = createContext();

function ComponentA() {
  const [user, setUser] = useState("samson");

  function changeName() {
    setUser("Bob");
  }

  return (
    <div className="component-a">
      <h2>ComponentA</h2>
      <CreateUser.Provider value={{ user, setUser }}>
        <ComponentB />
      </CreateUser.Provider>
      <button onClick={changeName}>Click ME!</button>
    </div>
  );
}

export default ComponentA;
