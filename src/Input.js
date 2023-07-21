import React from 'react'
import colorNames from 'colornames';
import './App.css';

const Input = ({colorValue,setColorValue,setHexaValue  }) => {
  return (
 
   <from onSubmit={(e)=> e.preventDefault()}>

   <label>enter color value:</label>
   <input 
   autoFocus
   type="text"
   placeholder='fill color name'
   required
   value={colorValue}
   onChange={(e)=>{setColorValue(e.target.value);
    setHexaValue(colorNames(e.target.value))

   
   
  
  }}
    />
   </from>

  )
}

export default Input
