import React from 'react'

const Square = ({colorValue , HexaValue}) => {
  return (
    <section
    className="square"
    style={{backgroundColor:colorValue}} >
    <p>{colorValue? colorValue:"WHITE COLOR"}</p>
    <p>{HexaValue ? HexaValue:#0000}</p>
    </section>
  )
}
Square.defaultProps={
    colorValue:"empty value"
    
    }


export default Square
