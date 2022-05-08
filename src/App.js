import './App.css';
import logo from './images/FreeCodeCamp_logo_(2).png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  }

  const calcularResultado = () => {
    setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={logo}
          alt="freecodecamp-logo" 
          className="freecodecamp-logo" 
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton click={agregarInput}>1</Boton>
          <Boton click={agregarInput}>2</Boton>
          <Boton click={agregarInput}>3</Boton>
          <Boton click={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton click={agregarInput}>4</Boton>
          <Boton click={agregarInput}>5</Boton>
          <Boton click={agregarInput}>6</Boton>
          <Boton click={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton click={agregarInput}>7</Boton>
          <Boton click={agregarInput}>8</Boton>
          <Boton click={agregarInput}>9</Boton>
          <Boton click={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton click={calcularResultado}>=</Boton>
          <Boton click={agregarInput}>0</Boton>
          <Boton click={agregarInput}>.</Boton>
          <Boton click={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clickClear={() => setInput('')}>
            C
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
