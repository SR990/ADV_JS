import React,{useState,createContext} from 'react'
import ValueChangeDisplay from './ValueChangeDisplay';

export const FruitContext = createContext();



function Parent(){
    const[data, setData] = useState("")
    const[fruit, setFruit] = useState("")

    const handleValue =(event) => {
        setFruit(event.target.value)
    }

    const addFruit =() => {
        setData(fruit);
        setFruit(""); 
    }






    return(
        <FruitContext.Provider value={data}>
        <div className="p-8 rounded-xl shadow-lg max-w-md mx-auto bg-gradient-to-br from-green-500 to-green-300">
          <h2 className="text-center text-4xl font-serif mb-6 text-white">Nature's Fruits</h2>
  
          <input
            type="text"
            value={fruit}
            onChange={handleValue}
            placeholder="Enter Fruit Name"
            className="bg-white text-black p-4 rounded-lg border-2 border-green-600 w-full mb-4 focus:outline-none focus:border-coral-600"
          />
  
          <h1 className="text-center text-2xl font-semibold text-white">{data ? `Added Fruit: ${data}` : "No fruit added"}</h1>
  
          <ValueChangeDisplay />
  
          <button
            onClick={addFruit}
            className="w-full mt-6 py-3 text-white font-semibold bg-orange-500 rounded-lg hover:bg-orange-400 transition duration-300"
          >
            Add me
          </button>
        </div>
      </FruitContext.Provider>
  


        
       


    )
}

export default Parent