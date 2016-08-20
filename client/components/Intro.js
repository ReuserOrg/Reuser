import React, { Component, PropTypes } from 'react';

class Intro extends Component {
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
        <h1>Intro</h1>
      </div>
    );
  }
}

export default Intro;