import React,{useContext} from "react"
import { userContext } from "./ComponentA"
function ComponentD(){
    const user = useContext(userContext)
    return(
        <div className="box">
            <h2>`bye ${user}`</h2>
            ComponentD
        </div>
    )
}

export default ComponentD