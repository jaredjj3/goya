import React, { Component } from 'react';
import { ClassCounter, FunctionalCounter, HookCounter } from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassCounter />
        <FunctionalCounter foo="bar" />
        <HookCounter factor={3} />
      </div>
    );
  }
}

export default App;
