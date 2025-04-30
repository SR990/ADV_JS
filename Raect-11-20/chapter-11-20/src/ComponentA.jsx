import ComponentB from "./ComponentB"
import React,{useState, createContext} from "react"

export const userContext = createContext();
function ComponentA(){

    const[user, setUser] = useState("samson")

   

    return(
        <div className="box">
            ComponentA
            <br/>
            <h2>hello {user}</h2>
            <br/>
            <userContext.Provider value={user}>
            <ComponentB />

            </userContext.Provider>
           
        </div>
    )
}

export default ComponentA