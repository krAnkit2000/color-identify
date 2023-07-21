import React from 'react'

const Square = ({colorValue , HexaValue}) => {
  return (
    <section
    className="square"
    style={{backgroundColor:colorValue}} >
    <p>{colorValue? colorValue:"empty value"}</p>
    <p>{HexaValue ? HexaValue:null}</p>
    </section>
  )
}
Square.defaultProps={
    colorValue:"empty value"
    
    }


export default Square
