import React, {useState} from 'react';
function ColorPicker(){
    const[color, setColor] = useState("#FFFFFF")

    const handleColor = (event) =>{
        setColor(event.target.value);
    }


    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display">
                <h3>Color : {color}</h3>
            </div>
            <label>Select Color</label>
            <input type='color' value={color} onChange={handleColor} />
        </div>
    )

}

export default ColorPicker