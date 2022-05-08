import React from 'react'
import '../css/BotonClear.css'

const BotonClear = (props) => {
  return (
    <div 
    className='boton-clear' 
    onClick={props.clickClear}>
       {props.children}
    </div>
  )
}

export default BotonClear;