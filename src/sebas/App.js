import React, { Component } from 'react';
import { ClassCounter, FunctionalCounter } from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassCounter />
        <FunctionalCounter foo="bar"/>
      </div>
    );
  }
}

export default App;
