import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Nav from './Nav';
import Splash from './Splash';

injectTapEventPlugin();

class App extends Component {
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
        <MuiThemeProvider>
          <Nav />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Splash title="A simple heading that emotionally explains the purpose of the platform." />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
