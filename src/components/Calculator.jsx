import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleSum = () => {
    // Math logic: convert strings to numbers and add
    setResult(Number(num1) + Number(num2));
  };

  const handleClear = () => {
    // Reset all states
    setNum1('');
    setNum2('');
    setResult(0);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Interactive Calculator</h2>
      
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="First Number"
      />
      
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Second Number"
      />

      <div>
        <button onClick={handleSum}>Calculate Sum</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculator;