import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Splash extends Component {
  static propTypes = {
    //propTypes go here
  }

  constructor(props) {
    super(props)
    this.state = {
      //state goes here
    }
  }

  render() {
    return (
      <div>
        <section id='splash'>
        <h1>{this.props.title}</h1>
        <RaisedButton label="Explore" />
        </section>
      </div>
    )
  }
}

export default Splash
