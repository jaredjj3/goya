import React, { Component } from 'react';
import { ClassCounter } from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassCounter title="foo" />
      </div>
    );
  }
}

export default App;
