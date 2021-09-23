import Calculator from '../components/Calculator/Calculator';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('0')
  const [tempValue, setTempValue] = useState('0')
  const [inOperatorMode, putInOperatorMode] = useState(false)
  const calcData = {
    conversions: ['AC', '+/-', '%'],
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
    operators: ['÷', 'x', '-', '+', '=']
  }
  
  return (
    <div className="App">
      {/* @ts-ignore */}
      <Calculator 
      setTempValue={setTempValue} 
      setValue={setValue} 
      calcData={calcData}
      value={value}
      tempValue={tempValue}
      putInOperatorMode={putInOperatorMode}
      inOperatorMode={inOperatorMode}
      />
    </div>
  );
}

export default App;
