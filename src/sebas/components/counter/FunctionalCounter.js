import React from 'react';

const withCount = BaseComponent => props => {
  return <BaseComponent count={0} {...props} />
};

export const FunctionalCounter = withCount(props => {
  return <div>{props.count} {props.foo}</div>;
});