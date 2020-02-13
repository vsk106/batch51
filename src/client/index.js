import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    count: 10
  };

  increment = () => {
    const currentVal = this.state.count;
    this.setState({ count: currentVal + 1 });
  }

  decrement = () => {
    const currentVal = this.state.count;
    this.setState({ count: currentVal - 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));