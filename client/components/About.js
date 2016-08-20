import React, { Component, PropTypes } from 'react'

class About extends Component {
  static propTypes = {
    //propTypes go here
  };

  constructor(props) {
    super(props)
    this.state = {
      //state goes here
    };
  }

  render() {
    return (
      <div className='about'>
        <div className='aboutContent'>
        <h1>About</h1>
        <p>Some text goes here...</p>
        </div>
        <div className='aboutContent'>
        <h1>About</h1>
        <p>Some text goes here...</p>
        </div>
        <div className='aboutContent'>
        <h1>About</h1>
        <p>Some text goes here...</p>
        </div>
      </div>
    );
  }
}

export default About
