import React, { useState } from 'react';
import './Calculator.css'

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  function handleButtonClick(value) {
    if (value === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue(displayValue + value);
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly />
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => setDisplayValue('')}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
