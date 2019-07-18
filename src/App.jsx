import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';

import Web from './versions/Web';
import Tablet from './versions/Tablet';
import Mobile from './versions/Mobile';

import Register from './pages/registration/Registration';
import Login from './pages/login/Login';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import SideBar from './components/sidebar/Sidebar';
import Contact from './components/contact/Contact';
import About from './components/about/About';

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
    return localStorage.getItem('user') ? (
      <Router>
        {
          this.props.width >= 992 && (
            <Web
              handleOnToggle={this.handleOnToggle}
              isVisible={this.state.isVisible}
            >
              <Switch>
                <Route exact component={Content} path="/" />
                <Route component={About} path="/about" />
                <Route component={Contact} path="/contact" />
                <Redirect from="*" to="/" />
              </Switch>
            </Web>
          )
        }
        {
          this.props.width < 992 && this.props.width >= 515 && (
            <Tablet/>
          )
        }
      </Router>
    ) : (
        <Router>
          <Web
            handleOnToggle={this.handleOnToggle}
            isVisible={this.state.isVisible}
          >
            <Switch>
              <Route exact component={Login} path="/login" />
              <Route component={Register} path="/register" />
              <Redirect from="*" to="/login" />
            </Switch>
          </Web>
        </Router>
      )
  }
  
}

export default withMobileSize(App);