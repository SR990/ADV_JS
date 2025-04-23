import React, {useState} from "react"
 function MyComponent(){
    const[name, setName] = useState('simham');
    const[age, setAge] = useState(0);
    const[IsEmployee, setIsEmployee] = useState(false)

    const handleClick = () =>{
        setName("samson")
    }
    const ageClick =() =>{
        setAge(age+1);
    }

    const empClick =()=>{
        setIsEmployee(!IsEmployee)
    }


    return(
        <div>
            <h4>Name:{name}</h4>
            <button onClick={handleClick}>SEE THe MAgic</button>
            <h4>Age:{age}</h4>
            <button onClick={ageClick}>SEE THe MAgic</button>
            <h4>IsEmployee:{IsEmployee ? 'yes ':' No'}</h4>
            <button onClick={empClick}>SEE THe MAgic</button>
        </div>

        
    )


}

export default MyComponent