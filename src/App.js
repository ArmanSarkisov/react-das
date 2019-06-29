import React from 'react';
import './App.css';
// function App() { statless componente aranc stati component function
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           change <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component { // statefull component talisa comp in talisa obj prop state vori skzbnakan arjeqe nulla 
  state = {
    country: "armenia"
  }
  // lyfecycles method-nere graca takic updatinginna u console a arac ira hetakanutyune nayelu hamar
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() { // argument chi stanum
    console.log("componentDidMount");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() { // cnox klassi method virtual domic tvyal vercnele mountinga anune
    // mounting methods -> virtual domic mtnuma dom
    // updateing methods -> dom-um update a anum
    // unmounting methods -> Dom-ic tanuma virtal dom kam domic hanuma
    console.log("render");
    return (
      <div>
        hi
      </div>
    )
  }
}

export default App;
