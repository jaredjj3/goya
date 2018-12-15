import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import { onMount } from '../../enhancers/onMount';

const enhance = compose(
  onMount(() => console.log('well done'))
);

export const HookCounter = enhance(function (props) {
  const [count, setCount] = useState(props.initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    if (count % 2 === 0) {
      console.log('hello hooks');
    }
  }, [count])

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  )
});
