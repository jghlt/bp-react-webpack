import React from 'react';

class Masthead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Masthead: componentDidMount');
  }

  render() {
    return (
      <h1>Masthead</h1>
    );
  }
}

export default Masthead;
