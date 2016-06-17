import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StateWithIntervalExample extends Component {
  constructor() {
    super();
    this.state = { date: Date() };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({ date: Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
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

ReactDOM.render(<StateWithIntervalExample />, document.getElementById('root'));
