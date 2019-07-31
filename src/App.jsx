import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';

import Web from './versions/Web';
// import Tablet from './versions/Tablet';
// import Mobile from './versions/Mobile';

import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';

import Content from './components/content/Content';
import Contact from './components/contact/Contact';
import About from './components/about/About';

import withMobileSize from './withMobileSize';
import PrivateRoute from './PrivateRoute';
import User from './components/user/User';
import Posts from './components/posts/Posts';
import Post from './components/posts/post/Post';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
    return (
      <Router>
        {
          this.props.width >= 992 && (
            <Web
              handleOnToggle={this.handleOnToggle}
              isVisible={this.state.isVisible}
            >
              <Switch>
                <Route component={Login} path="/login" />
                <Route component={Registration} path="/register" />

                <PrivateRoute exact component={Content} path="/" />
                <PrivateRoute component={About} path="/about" />
                <PrivateRoute component={Contact} path="/contact" />
                <PrivateRoute component={User} path="/user/:id" />
                <PrivateRoute component={Posts} path="/posts" />
                <PrivateRoute component={Post} path="/post/:id" />
                <Redirect from="*" to="/" />
              </Switch>
            </Web>
          )
        }
        {
          this.props.width < 992 && this.props.width >= 515 && (
            <div>
              tablet version
            </div>
          )
        }
      </Router>
    )
  }

}

export default withMobileSize(App);