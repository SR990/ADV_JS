import ComponentD from "./ComponentD"
import React,{useContext} from "react"
import { userContext } from "./ComponentA"
function ComponentC(){

    const newUser = useContext(userContext)
    return(
        <div className="box">
            <h2>por ra re {newUser}</h2>
            ComponenC
            
            <br />
            <ComponentD />
        </div>
    )
}

export default ComponentC