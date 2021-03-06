import React from 'react';
import { compose, withStateHandlers } from 'recompose';

const enhance = compose(
  withStateHandlers(
    { count: 0 },
    {
      increment: (state, _props) => (_event) => ({ count: state.count + 1 }),
      decrement: (state, _props) => (_event) => ({ count: state.count - 1 })
    }
  )
); 

export const FunctionalCounter = enhance(props => {
  return <div>
    Functional Counter 
    <button onClick={props.decrement}>-</button>
    {props.count}
    <button onClick={props.increment}>+</button>
  </div>
});