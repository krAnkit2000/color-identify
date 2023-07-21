
import { useState } from 'react';
import './App.css';
import Input from './Input';
import Square from './square';

function App() {
  //use state
  const [colorvalue,setColorValue]= useState()
  const [Hexavalue,setHexaValue] =useState()
  return (
    <div className="App">
    
   <Square
    colorValue={colorvalue}
    HexaValue={Hexavalue}/>
   

   <Input 
   colorValue={colorvalue}
   setColorValue={setColorValue} 
   HexaValue={Hexavalue}
   setHexaValue ={setHexaValue}/>
    </div>
  );
}

export default App;
