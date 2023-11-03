import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Counter() {
  const [count, setcount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => { setcount(count + 1); console.log(count); }}>
        Up
      </button>
      <button
        onClick={() => { setcount(count - 1); console.log(count); }}>
        Down
      </button>
    </div>
  );
}
export default Counter;

