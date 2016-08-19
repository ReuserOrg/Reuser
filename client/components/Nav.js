import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends Component {
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
      <div className='navigation'>
      Hi
  		  <RaisedButton label="Button" />
      </div>
    );
  }
}

export default Nav;
