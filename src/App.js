import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleButtonClick = (value) => {
    if (value === '=' && input.trim() === '') {
      setResult('Error');
      return;
    }

    if (value === '=') {
      try {
        const output = eval(input);
        setResult(output === Infinity ? 'Infinity' : output);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-container">
      <input type="text" value={input} readOnly className="input-bar" />
      <div className="result-display">{result}</div>
      <div className="button-container">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "C", "/"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        <button onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

export default App;
