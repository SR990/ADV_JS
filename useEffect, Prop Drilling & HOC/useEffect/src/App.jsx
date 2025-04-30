import React,{useState, useEffect} from 'react';
function App(){

  const[state, setState] = useState("State 1")

  useEffect(() => {
    const interval = setInterval(()=>{
      console.log("useEffect Ran");
    },2000)

    return () =>{
      clearInterval(interval);
    }



  },[state])

  return(
    <>
    <div className="container">
      <div className="btn-container">
        <button onClick={() => setState("State 1")}>
          State-1
        </button>
        <button onClick={() => setState("State 2")}>
          State-2
        </button>
        <button onClick={() => setState("State 3")}>
          State-3
        </button>
      </div>
      <div className="display">{state}</div>
    </div>
    
    
    </>
  )
}

export default App