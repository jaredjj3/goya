import React, { useState, useEffect } from 'react';

export function HookCounter(props) {
  const [count, setCount] = useState(props.initialCount || 0);
  const increment = () => ( setCount(count + (props.factor || 1)) );
  const decrement = () => ( setCount(count - (props.factor || 1)) );

  useEffect(() => {
    if (count % 2 === 0) {
      console.log('Value is divisible by 2!'); 
    }
  })

  return (
    <div>
      Hook Counter <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button> 
    </div>
  );
}
