import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NestedComponentsExample extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        'Tinkerbell',
        'Vidia',
        'Rosetta',
      ],
    };
  }

  render() {
    const { names } = this.state;
    return <List names={ names } />;
  }
}

// List.js (stateless component)
const List = ({ names }) => {
  const renderedItems = names.map((name, index) =>
    <Item key={ index } name={ name } />
  );
  return <ul>{ renderedItems }</ul>;
};

// Item.js (stateless component)
const Item = ({ name }) => (
  <li>{ name }</li>
);

ReactDOM.render(<NestedComponentsExample />, document.getElementById('root'));
