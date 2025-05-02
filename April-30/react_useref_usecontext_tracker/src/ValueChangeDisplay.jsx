import { useState, useContext, useRef } from "react"
import { FruitContext } from "./Parent"
import { useEffect } from "react";

function ValueChangeDisplay(){
    const fruit = useContext(FruitContext);
    const previousFruit  = useRef();

    useEffect(() => {
        previousFruit.current = fruit;

    },[fruit])



    return(
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold text-green-600">New Fruit: {fruit}</h3>
        <h4 className="text-orange-500 font-semibold">Previous Fruit: {previousFruit.current || "None"}</h4>
      </div>
    )
}

export default ValueChangeDisplay
