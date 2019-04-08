import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    greeting: false
  }

  sayHello = () => {
    this.setState({ greeting: true })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.sayHello}>HI</button>
          { this.state.greeting && <h1>HULLO</h1>}
        </header>
      </div>
    );
  }
}

export default App;
