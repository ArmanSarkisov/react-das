import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Web from './versions/Web';
import Tablet from './versions/Tablet';
import Mobile from './versions/Mobile';

import withMobileSize from './withMobileSize';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Registration from './pages/registration/Registration';

class App extends React.Component {
  state = {
    isVisible: false
  };

  constructor(props) {
    super(props);
    this.handleOnToggle = this.handleOnToggle.bind(this);
  }

  handleOnToggle() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return localStorage.getItem("user") ? (
      <Router>
        {this.props.width >= 992 && <Web handleOnToggle={this.handleOnToggle} isVisible={this.state.isVisible} />}
        {this.props.width >= 515 && this.props.width < 992 && <Tablet handleOnToggle={this.handleOnToggle} isVisible={this.state.isVisible} />}
        {this.props.width >= 0 && this.props.width < 515 && <Mobile handleOnToggle={this.handleOnToggle} isVisible={this.state.isVisible} />}
      </Router>
    ) : (
      <Registration />
    )
  }
}

export default withMobileSize(App);