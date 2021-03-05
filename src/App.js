import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleCounterUp = this.handleCounterUp.bind(this);
  }
  state = {
    count: 0,
    count2: 1
  }

  handleCounterUp(){
    this.setState({ count: this.state.count + 1, count2: this.state.count2 + 2 })
    // this.setState({ count: this.state.count - 1 })
  };

  componentDidUpdate() {
    console.log('UPDATE')
    console.log(this.state);
  }

  render() {

    const { count, count2 } = this.state;

    return (
      <div>
        <button onClick={this.handleCounterUp}>COUNTER UP</button>
        count = {count} {count2}
      </div>
    )
  }
}


export default App;