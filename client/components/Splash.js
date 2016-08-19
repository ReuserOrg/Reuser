import React, { Component, PropTypes } from 'react';
import Nav from './Nav';

class Splash extends Component {
  static propTypes = {
    //propTypes go here
  };

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    };
  }

  render() {
    return (
      <div>
        <h1>This is working!</h1>
      </div>
    );
  }
}

export default Splash;
