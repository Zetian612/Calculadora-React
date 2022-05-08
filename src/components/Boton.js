import React from 'react';
import '../css/Boton.css';

function Boton(props){

    const isOp = valor => {
        return isNaN(valor) && (valor != '. ') && (valor != '=');
    }

    return(
        <div
        onClick={() => props.click(props.children)}
        className={`boton-contenedor ${isOp(props.children) ? 'op' : ''}`.trimEnd()}
        >
            {props.children}
        </div>
    )
}
export default Boton;