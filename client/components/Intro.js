import React, { Component, PropTypes } from 'react'

class Intro extends Component {
  static propTypes = {
    //propTypes go here
  };

  constructor(props) {
    super(props)
    this.state = {
      title: "We're making it easier to give to those in need.",
      paragraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
    };
  }

  render() {
    return (
      <div className='intro'>
        <div className='introInfo'>
          <h1>{this.state.title}</h1>
          <p>{this.state.paragraph}</p>
        </div>
        <div className='introUpdated'>
          <h3>Keep Updated</h3>
        </div>
      </div>
    );
  }
}

export default Intro