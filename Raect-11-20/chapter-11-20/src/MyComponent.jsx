import { useState, useEffect, useRef } from "react"



function MyComponent(){
//....................chapter-11...................//
    // const [count , setCount] = useState(0)

    // const increment = () => {
    //     setCount(c => c +1)
    //     setCount(c => c +1)
    //     setCount(c => c +1)
       
    // }

    // const decrement = () => {
    //   setCount(prevCount => prevCount - 3)
    // }


    // const reset = () => {
    //     setCount(c => c=0)


    // return (
        
    //         <div className="counter">
    //         <h1>{count}</h1>
    //         <button onClick={increment}>Increment</button>
    //         <button onClick={decrement}>Decrement</button>
    //         <button onClick={reset}>Reset</button>
    //     </div> 

        
        
    // )


//-----------------chapter-12-updated objects-----------------//

//    const[car , setCar] = useState({year:2024, make:'ford' , name:'mustang' })
    
//    const handleYear =(event) =>{
//     setCar(c => ({...c, year:event.target.value})) //() this compulsory before the javascript object value
//    }
//     const handlemake =(event) => {
//         setCar(c => ({...c, make:event.target.value}))
    
//     }

//     const handleName = (event) =>{
//         setCar(c => ({...c, name:event.target.value}))
//     }
   
   
//    return(
//     <div className="update">
//         <h3>My Car is : {car.year}, {car.make}, {car.name}</h3>

//         <input type="number" value={car.year} onChange={handleYear} /> <br /><br />
//         <input type="text" value={car.make} onChange={handlemake} /><br /><br />
//         <input type="text" value={car.name} onChange={handleName} /><br /><br />
//     </div>

//    )

//------------------------chapter-13-updated Array--------------------------//

// const[food, setFood] = useState(
//     ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']
// )

// const addFruit = () =>{
//    const newFruit = document.getElementById("foodinput").value;
//    document.getElementById("foodinput").value="";

//    setFood(f =>[...f, newFruit]) //must be kept in array
// }

// const handleRemove = (index) =>{
//     setFood(food.filter((_,i) => i !== index))

// }


// return(
//     <div className="food">
//         <h1>List Of fruits</h1>
//         <ul>
//             {food.map((f, index) => (
//                 <li key={index} onClick={()=>handleRemove(index)}>
//                     {f}
//                     </li>
//             ))}
//         </ul>
//         <input type="text" id="foodinput" placeholder="enter fruit"  />
//         <button onClick={addFruit}>Add</button>
//     </div>
// )
 
//-------------------update ARRAY of OBJECTS in state 🚘------------------//

// const[cars, setCars] =useState([]);
// const[carYear, setCarYear] = useState(new Date().getFullYear());
// const[carMake, setCarMake] = useState('');
// const[carName, setCarName] = useState('');
// function handleAddCar(){
//     const newCars = {
//         year: carYear,
//         make: carMake,
//         name: carName
//     }

//     setCars(car => [...car, newCars])
//     setCarYear(new Date().getFullYear());
//     setCarMake("");
//     setCarName('');
    

// }

// function handleRemoveCar(index){
//     setCars(cars.filter((_,i)=> i!==index))
    
// }

// function handleYearChange(event){
//     setCarYear(event.target.value)
    
// }


// function handleMakeChange(event){
//     setCarMake(event.target.value);
    
// }

// function handleNameChange(event){
//     setCarName(event.target.value)
    
// }


// return(
//     <div className="car">
//         <h1>Lsit Of Cars</h1>
//         <ul>
//             {cars.map((car, index) =>
//               <li key={index} >{car.year} {car.make} {car.name}         <button onClick={()=>handleRemoveCar(index)}>Delete</button></li>  )}  

//         </ul>

//         <input type="number" value={carYear} onChange={handleYearChange} /><br />
//         <input type="text" value={carMake} onChange={handleMakeChange}  placeholder="Enter Makers Name"/><br />
//         <input type="text" value={carName} onChange={handleNameChange} placeholder="enter NAme of the car" /><br />
//         <button onClick={handleAddCar}>Add</button>
//     </div>
// )


// 


//-----------------chapter-16-useEffect()--------------------------------------//
        //////example-1///////////
// const[count, setCount] = useState(0);

// useEffect(() => {
//     document.title =`count ${count}`
// },[count])

// function add(){
//     setCount(c => c +1)
// }

// function sub(){
//     setCount(c => c -1)
// }




// return(
//     <div className="con">
//         <h2>{count}</h2>
//     <button onClick={add}>Add</button>
//     <button onClick={sub}>sub</button>
//     </div>
    
// );
            //////////example-2-------------////////
    // const[width , setWidth] =useState(window.innerWidth);
    // const[height , setHeight] =useState(window.innerHeight);
    
    // useEffect(()=> {
    //     window.addEventListener('resize',handleResize)
    //     document.title=`${width}px ${height}px`

    //     console.log('evenliste');

    //     return () =>{
    //         window.removeEventListener('resize',handleResize)
    //     }

    // },[width , height])

  

    // function handleResize(){
    //     setHeight(window.innerHeight);
    //     setWidth(window.innerWidth)
    // }


    // return(
    //     <div className="dimension">
    //         <p>Width : {width}</p>
    //         <p>Heigth : {height}</p>
    //     </div>
    // )

//---------------chapter-18-useRef()------------------------------------//

        const inputRef1 = useRef(null)
        const inputRef2 = useRef(null)
        const inputRef3 = useRef(null)

        useEffect(() =>{
            console.log('component rendered')


        });

        function handleClick(){
            inputRef1.current.focus();
            inputRef1.current.style.background="red";
            inputRef2.current.style.background="";
            inputRef3.current.style.background="";
          
        }

        function handleClick2(){
            inputRef2.current.focus();
            inputRef1.current.style.background="";
            inputRef2.current.style.background="red";
            inputRef3.current.style.background="";
          
        }

        function handleClick3(){
            inputRef3.current.focus();
            inputRef1.current.style.background="";
            inputRef2.current.style.background="";
            inputRef3.current.style.background="red";
          
        }







return(
    <div className="con">
        <button onClick={(handleClick)}>Click Me</button>
    <input type="text" ref={inputRef1} />

    <button onClick={(handleClick2)}>Click Me</button>
    <input type="text" ref={inputRef2} />


    <button onClick={(handleClick3)}>Click Me</button>
    <input type="text" ref={inputRef3} />

    </div>
    
)




}


export default MyComponent