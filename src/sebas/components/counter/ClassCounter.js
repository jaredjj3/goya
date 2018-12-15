import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  componentDidUpdate(_prev_props, prev_state) {
    if (this.state.count % 2 === 0) {
      console.log('Counter updated!');
    }
  };

  decrement(_event) {
    const newState = { 
      ...this.state,
      count: this.state.count - 1
    }

    this.setState(newState);
  };

  increment(_event) {
    const newState = { 
      ...this.state,
      count: this.state.count + 1
    }

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>        
        {this.state.count}
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
