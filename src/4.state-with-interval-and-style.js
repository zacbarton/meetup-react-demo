import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class StateWithIntervalAndStyleExample extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { date } = this.state;

    const style = {
      color: date.getSeconds() % 2 === 1 ? 'red' : 'green',
    };
    const dateAsString = date.toString();

    return (
      <div style={ style }>
        The time is: { dateAsString }.
      </div>
    );
  }
}

ReactDOM.render(<StateWithIntervalAndStyleExample />, document.getElementById('root'));
