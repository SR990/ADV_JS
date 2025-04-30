import React,{useState,useEffect} from 'react';
import background from './assets/background.jpg'
function DigitalClock(){
    const[time , setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    },[])


    function format (){
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        let meridiem = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12;
         return `${hours}: ${minutes} :${seconds} :${meridiem}`


    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{format()}</span>
            </div>

        </div>
    )

}
export default DigitalClock