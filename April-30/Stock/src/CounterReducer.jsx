import React,{useReducer, useState} from 'react'
import { act } from 'react';

const ACTIONS = {
   ADD_TODO : 'add-todo'
}

function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD_TODO :
            return [...todos, newTodo(name)]
    }
}

function newTodo(name){
    return {id: Date.now(),name:name , Complete:false}

}
function CounterReducer(){

    const[todos, dispatch]= useReducer(reducer,[])
    const[name,setName] = useState();




    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName("")
       }

       console.log(todos)


    return(
       <div className="FORM">
        <form onSubmit={onSubmit}>
            <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Enter Something '/>
        </form>
       </div>
    )
}

export default CounterReducer