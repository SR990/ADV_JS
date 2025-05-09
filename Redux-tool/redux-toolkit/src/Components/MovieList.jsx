import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { removeMovie } from "../movieSlice";

function MovieList(){
    const movies = useSelector((state)=> state.movie.movies)

    const dispatch = useDispatch();
    const onHandleDelete = (id) => {
        dispatch(removeMovie(id))
    }


    return(
        <>
        {" "}
        <div>
            <h1>Movie List</h1>
            <div>
                {movies.map((movie)=>(
                    <div key={movie.id}>{movie.name}<button onClick={()=>onHandleDelete(movie.id)}>Delete</button></div>
                ))}
            </div>
        </div>
        </>
    )
}

export default MovieList