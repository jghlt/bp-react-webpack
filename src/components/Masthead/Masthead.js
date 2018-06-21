import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
  }

  state = {
  }

  componentDidMount() {
    console.log('Header: componentDidMount')
  }

  componentDidUpdate() {
    console.log('Header: componentDidUpdate')
  }

  render() {
    return (
      <div id="header">
        <h1>Header</h1>
      </div>
    );
  }
}

export default Header;
