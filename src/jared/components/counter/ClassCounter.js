import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  set count(count) {
    const nextState = {
      ...this.state,
      count
    };

    this.setState(nextState);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.count % 2 === 0) {
      console.log(`prevState was : ${JSON.stringify(prevState)}`);
    }
  }

  decrement(_event) {
    this.count = this.state.count - 1;
  }

  increment(_event) {
    this.count = this.state.count + 1;
  }

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        {this.state.count}
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
