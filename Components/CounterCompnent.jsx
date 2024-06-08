import React, { useState } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Shivam");

  const handleValueChange = () => {
    setValue(prevValue => (
      count % 2 === 1 ? "The Number is Odd" : "The Number is Even"
    ));
  };

  return (
    <div>
      <p>Count Component - {count}</p>
      <p>{value}</p>
      <button onClick={handleValueChange}>CHANGE</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default CounterComponent;


