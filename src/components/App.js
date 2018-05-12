import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class App extends React.Component {
  static propTypes = {
  }

  state = {
  }
  componentDidMount() {
    console.log('App: componentDidMount');
  }

  componentDidUpdate() {
    console.log('App: componentDidUpdate');
  }

  render() {
    return (
      <div>
        <Header/>
        <div id="app">
          <h1>App</h1>
        </div>
      </div>
    );
  }
}

export default App;
