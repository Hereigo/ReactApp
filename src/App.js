import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPersonVar from './MyPerson/MyPerson';

class App extends Component {

  state = {
    persons: [
      { name: "Alex" },
      { name: "Max" },
      { name: "Felix" }
    ],
    personsAdditionalStartField: "Additional Start Field",
    otherTestState: 'AAA AAA !!!'
  };

  // Handler (arrow function, so "this" always points to the component):
  switchNameHandler = (newName) => {
    this.setState({  // update\mutate "state"
      persons: [
        { name: newName },
        { name: newName },
        { name: newName }
      ]
    });
  };

  // "this.setState" in a class MERGES the new object into the old state:
  // only "persons" is replaced, "personsAdditionalStartField" and
  // "otherTestState" remain as is !!!
  // (A "useState" setter in a function component REPLACES the whole object instead.)

  render() {
    console.log(this.state);

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

          <button onClick={() => this.switchNameHandler('BTN-Click')}>Switch Name</button>

          <MyPersonVar name={this.state.persons[0].name} />

          <MyPersonVar name={this.state.persons[1].name} />

          {/* You can pass a METHOD as a PROPERTY into Component. */}

          <MyPersonVar
            myClickProp={this.switchNameHandler.bind(this, 'Last-LINE-Click')}
            name={this.state.persons[2].name}>
            (Can be clicked also.)
          </MyPersonVar>

        </div>
      </div>
    );
  }
}

export default App;
