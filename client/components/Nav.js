import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Nav extends Component {
  static propTypes = {
    //propTypes go here
  }

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    }
  }

  render() {
    return (
      <div className='navigation'>
        <div className='logoContainer'>
          <img src='/resources/images/logo-white.png' alt='Reuser' className='logo' />
        </div>
        <div className='navContainer'>
          <a href='#'><h4 className='navActive' >About</h4></a>
          <a href='#'><h4>Collaborate</h4></a>
          <a href='#'><h4>Contact</h4></a>
        </div>
      </div>
    )
  }
}

export default Nav
