import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPersonVar from './MyPerson/MyPerson';

class App extends Component {

  // use it carefully!
  state = {
    persons: [
      { name: "Alex" },
      { name: "Max" },
      { name: "Felix" }
    ]
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          <MyPersonVar name={this.state.persons[0].name} />
          <MyPersonVar name={this.state.persons[1].name} />
          <MyPersonVar name={this.state.persons[2].name} > Yahoo! </MyPersonVar>

        </p>
      </div>
    );
  }
}

export default App;
