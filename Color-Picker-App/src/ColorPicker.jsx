import React from 'react'
import { useState } from 'react'

export default function ColorPicker() {
    const [color, setColor] = useState();
    function changeColor(event){
        setColor(event.target.value);
    }
  return (
    <>
    <div>
        <h1>Color Picker</h1>
        <div className='color-div' style={{backgroundColor: color}}>
            <p style={{fontWeight: 'bolder'}}>Selected Color : {color}</p>
        </div>
        <div>
            <label>Select Color : </label>
            <input type="color" value={color} onChange={changeColor} />
        </div>
    </div>
    </>
  )
}
