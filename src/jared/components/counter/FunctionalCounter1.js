import React from 'react';
import { compose, withState, withHandlers, lifecycle } from 'recompose';

const enhance = compose(
  withState('count', 'setCount', ({ initialCount }) => initialCount || 0),
  withHandlers({
    increment: props => _event => {
      props.setCount(props.count + 1)
    },
    decrement: props => _event => {
      props.setCount(props.count - 1)
    }
  }),
  // ...
  withHandlers({
    randomize: props => _event => {
      props.setCount(Math.floor(props.count * Math.random()));
    }
  }),
  lifecycle({
    componentDidUpdate(_prevProps) {
      if (this.props.count !== 0 && this.props.count % 4 === 0) {
        this.props.setCount(0);
      }
    }
  })
);

// const enhance = compose(
//   withStateHandlers(
//     props => ({ count: props.initialCount }),
//     {
//       increment: ({ count }) => _event => ({ count: count + 1 }),
//       decrement: ({ count }) => _event => ({ count: count - 1 })    }
//   )
// )

export const FunctionalCounter1 = enhance(props =>
  <div>
    <button onClick={props.decrement}>-</button>  
    {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.randomize}>?</button>
  </div>
);
