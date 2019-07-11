import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/header/Header';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';


import withMobileSize from './withMobileSize';

import Wev from './components/Versions/Web'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// ******tnayine toggle ov havagel header home about contact
// **** sidebar footer + content
class App extends React.Component { // statefull component talisa comp in talisa obj prop state vori skzbnakan arjeqe nulla 
  state = {
    // country: "Armenia",
    isSideBarVisiable: false,
  }

  // lyfecycles method-nere graca takic updatinginna u console a arac ira hetakanutyune nayelu hamar
  constructor(props) {
    super(props);
    // console.log("constructor");
    // this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
    this.handelOnToggle = this.handelOnToggle.bind(this);
  }


  handelOnToggle() {
    this.setState({ isSideBarVisiable: !this.state.isSideBarVisiable });
  }
  // handleOnChangeCountry() {
  //   if (this.state.country === "Armenia") {
  //     this.setState({country: "USA"});
  //   } else {
  //     this.setState({country: "Armenia"});
  //   }
  // }

  // componentDidMount() { // argument chi stanum
  //   console.log("componentDidMount");
  // }

  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps");
  //   return null;
  // }


  // handleClick = () => { // ashxatuma aranc bind-i
  //   this.setState({
  //     country: "USA"
  //   });
  // }



  render() { // cnox klassi method virtual domic tvyal vercnele mountinga anune
    // mounting methods -> virtual domic mtnuma dom
    // updateing methods -> dom-um update a anum
    // unmounting methods -> Dom-ic tanuma virtal dom kam domic hanuma
    // console.log("render");
    // console.log(this.state);
    console.log(this.props)
    return (
      // ete menq senc attr enq poxancum ira arjeqe linuma true mijev et false a linum
      <BrowserRouter>
        
      </BrowserRouter>
    )
  }
}

{/* <p>{this.state.country}</p>
        <button onClick={this.handleOnChangeCountry}>poxel</button> */}
{/* <React.Fragment>

        </React.Fragment>  poxarinuma kornevoy divin */}
{/* <p>hello {this.state.country}</p>
        <button onClick={this.handleOnChangeCountry}>change text</button> */}
export default withMobileSize(App);
