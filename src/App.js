import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPersonVar from './MyPerson/MyPerson';

class App extends Component {

  // use it carefully!
  // "state" is reserved property name.
  state = {
    persons: [
      { name: "Alex" },
      { name: "Max" },
      { name: "Felix" }
    ]
  }

  switchNameHandler = () => {

    // update\mutate "state"
    this.setState({
      persons: [
        { name: 'HIDDEN' },
        { name: 'HIDDEN' },
        { name: 'HIDDEN' }
      ]
    })
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          <button onClick={this.switchNameHandler}>Switch Name</button>

          <MyPersonVar name={this.state.persons[0].name} />
          <MyPersonVar name={this.state.persons[1].name} />
          <MyPersonVar name={this.state.persons[2].name} > Yahoo! </MyPersonVar>

        </p>
      </div>
    );
  }
}

export default App;
