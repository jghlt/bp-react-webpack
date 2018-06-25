import React from 'react';
import Masthead from '../Masthead/Masthead';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('App: componentDidMount');
  }

  render() {
    return (
      <div>
        <Masthead />
        <div id="app">
          <h1>App</h1>
        </div>
      </div>
    );
  }
}

export default App;
