import React from 'react';
import './App.css';
// import { stat } from 'fs';

class App extends React.Component { // statefull component talisa comp in talisa obj prop state vori skzbnakan arjeqe nulla 
  state = {
    country: "armenia",
  }
  
  // lyfecycles method-nere graca takic updatinginna u console a arac ira hetakanutyune nayelu hamar
  // constructor(props) {
  //   super(props);
  //   console.log("constructor");
    
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

    return (
      <div>
        hello {this.state.country}
        <br />
        <button onClick={this.handleClick}>change text</button>
      </div>
    )
  }
}

export default App;
