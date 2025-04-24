import React, { useState } from 'react';

function TodoApp() {
  const [todo, setTodo] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodo([...todo, newTodo]); 
    setNewTodo(''); 
  };

  const listTasks = todo.map(item => <li>{item}</li>)

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold mb-2">📝 Todo App</h1>
      <p className="mb-4 text-gray-600">Make your Day Perfect</p>

      <div className="bg-amber-500 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">List:</h2>
        <ul className="mb-4">{listTasks}
          
        </ul>

        <input
          className="p-2 rounded mr-2"
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add a new task..."
        />
        <button 
          onClick={addTodo}
          className="bg-white text-amber-700 font-semibold px-4 py-2 rounded shadow"
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
}

export default TodoApp;
