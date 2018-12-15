import React from 'react';

const withCount = BaseComponent => props => (
  <div id="foo">
    <BaseComponent count={0} {...props} />
  </div>
);

export const FunctionalCounter = withCount(props => <div>{props.count}{props.foo}</div>);
