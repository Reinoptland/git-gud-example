import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  sayHello = () => {
    this.setState({ greeting: true })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.sayHello}>HI</button>
        </header>
      </div>
    );
  }
}

export default App;
