import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addMovie} from "../movieSlice";

function MovieInput(){
    const[newMovie, setNewMovie] = useState("");

    const dispatch = useDispatch();

    const onHandleAdd = () => {
        if(newMovie){
            dispatch(addMovie(newMovie))
            setNewMovie("");


        }
    }




    return(
        <>
        <div>
        <input onChange={(e)=>setNewMovie(e.target.value)} value={newMovie} type="text" placeholder="enter Movie name" />
        <button onClick={onHandleAdd}>Add</button>


        </div>
        

        </>
    )
}

export default MovieInput;