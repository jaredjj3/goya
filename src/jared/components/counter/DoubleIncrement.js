import React, { Component } from 'react';

export class DoubleIncrement extends Component {
  constructor(props) {
    super(props);

    this.dblIncrement = this.dblIncrement.bind(this);
  }

  async dblIncrement() {
    await this.props.increment();
    this.props.increment();
  }

  render() {
    return (
      <button onClick={this.dblIncrement}>++</button>
    )
  }
}