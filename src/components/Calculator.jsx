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
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">React Calc</h2>
        
        <div className="mb-3">
          <label className="form-label">First Number</label>
          <input 
            type="number" 
            className="form-control form-control-lg"
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Second Number</label>
          <input 
            type="number" 
            className="form-control form-control-lg"
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
          />
        </div>

        <div className="d-grid gap-2 mb-3">
          <button className="btn btn-primary btn-lg" onClick={handleSum}>Add Numbers</button>
          <button className="btn btn-outline-danger" onClick={handleClear}>Clear</button>
        </div>

        <div className="alert alert-info text-center m-0">
          <h4 className="m-0">Result: {result}</h4>
        </div>
      </div>
    </div>
  );
};

export default Calculator;