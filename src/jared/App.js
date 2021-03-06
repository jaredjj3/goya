import React, { Component } from 'react';
import { ClassCounter, FunctionalCounter1, FunctionalCounter2, HookCounter } from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassCounter title="foo" />
        <FunctionalCounter1 initialCount={2} foo="bar" />
        <FunctionalCounter2 initialCount={2} foo="bar" />
        <HookCounter initialCount={8} />
      </div>
    );
  }
}

export default App;
