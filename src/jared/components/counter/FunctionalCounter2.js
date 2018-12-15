import React from 'react';
import { compose, withStateHandlers } from 'recompose';

const enhance = compose(
  withStateHandlers(
    props => ({ count: props.initialCount }),
    {
      increment: ({ count }) => _event => ({ count: count + 1 }),
      decrement: ({ count }) => _event => ({ count: count - 1 })
    }
  )
)

export const FunctionalCounter2 = enhance(props =>
  <div>
    <button onClick={props.decrement}>-</button>
    {props.count}
    <button onClick={props.increment}>+</button>
  </div>
);
