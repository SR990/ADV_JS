import React, {useState} from 'react'

function Counter(){

    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count +1)
    }

    const decrement = () => {
        setCount(count -1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="space-container">
      <h1 className="galaxy-number">{count}</h1>
      <div className="button-group">
        <button className="btn space-btn" onClick={() => setCount(count + 1)}>🚀 Increment</button>
        <button className="btn space-btn" onClick={() => setCount(count - 1)}>🛰️ Decrement</button>
        <button className="btn reset-btn" onClick={() => setCount(0)}>🌌 Reset</button>
      </div>
    </div>
    )


}

export default Counter