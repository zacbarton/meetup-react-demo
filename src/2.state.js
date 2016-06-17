import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StateExample extends Component {
  constructor() {
    super();
    this.state = { date: Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        The time is: { date }.
      </div>
    );
  }
}

ReactDOM.render(<StateExample />, document.getElementById('root'));
