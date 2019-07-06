import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

// ******tnayine toggle ov havagel header home about contact
// **** sidebar footer + content
class App extends React.Component { // statefull component talisa comp in talisa obj prop state vori skzbnakan arjeqe nulla 
  state = {
    country: "Armenia",
  }
  
  // lyfecycles method-nere graca takic updatinginna u console a arac ira hetakanutyune nayelu hamar
  constructor(props) {
    super(props);
    console.log("constructor");
    this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
  }


  handleOnChangeCountry() {
    if (this.state.country == "Armenia") {
      this.setState({country: "USA"});
    } else {
      this.setState({country: "Armenia"});
    }
  }

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
  console.log(this.state);

    return (
      <>
        <p>{this.state.country}</p>
        <button onClick={this.handleOnChangeCountry}>poxel</button>
        <Header />
        <div className="content_sidebar">
          <Sidebar />
          <Content />
        </div>
        <Footer />


         {/* <React.Fragment>

        </React.Fragment>  poxarinuma kornevoy divin */}
        {/* <p>hello {this.state.country}</p>
        <button onClick={this.handleOnChangeCountry}>change text</button> */}
      </> 
    )
  }
}

export default App;
