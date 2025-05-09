 import React from "react"
import { useState } from "react"

 function ToDoApp(){
const[task, setTask] = useState(["eat breakfast", "drink Milk"])
const[newTask, setNewTask] = useState(" ")

function addTask(){

  setTask(t => [...t,newTask])
  setNewTask('')

}

function removeTask(index){
  setTask(task.filter((_,i)=> i !== index))

}

function moveTaskUp(index){
  if(index > 0){
    const updateTasks = [...task];
    [updateTasks[index] , updateTasks[index - 1]]=
    [updateTasks[index -1] , updateTasks[index ]]

    setTask(updateTasks);
  }
  

}

function moveTaskDown(index){
  if(index < task.length -1){
    const updateTasks = [...task];
    [updateTasks[index] , updateTasks[index + 1]]=
    [updateTasks[index +1] , updateTasks[index ]]

    setTask(updateTasks);

  }

}

function handleTask(event){
  setNewTask(event.target.value);
}

return (
  <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col items-center py-10">
    <h1 className="text-4xl font-bold mb-2 text-center text-shadow-md">🎬 Todo List App</h1>
    <p className="mb-8 italic text-gray-400 text-center">Don't forget your daily tasks, superstar! 🌟</p>

    <div className="w-full max-w-md">
      <ul className="space-y-4">
        {task.map((t, index) => (
          <li
            key={index}
            className="bg-gray-800 flex items-center justify-between p-4 rounded-md shadow-md hover:bg-gray-700 transition"
          >
            <span className="flex items-center gap-2 text-lg">{`🎥 ${t}`}</span>
            <button
              onClick={() => removeTask(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
              title="Delete"
            >
              Delete
            </button>
            <button
              onClick={() => moveTaskUp(index)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm transition"
            >
              🔼
            </button>
            <button
              onClick={() => moveTaskDown(index)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm transition"
            >
              🔽
            </button>
          </li>
        ))}
      </ul>
    </div>

    <div className="w-full max-w-md mt-8 flex gap-2">
      <input
        type="text"
        id="task"
        placeholder="Enter your task"
        onChange={handleTask}
        className="flex-1 p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
      >
        Add Task
      </button>
    </div>
  </div>
);

 }
 

 export default ToDoApp