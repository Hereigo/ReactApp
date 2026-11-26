import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPersonVar from './MyPerson/MyPerson';

class App extends Component {

  state = {
    persons: [
      { id: 'guid111', name: "Alex" },
      { id: 'guid222', name: "Max" },
      { id: 'guid333', name: "Felix" }
    ],
    showPersons: true
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

  deletePersonHandler = (personIndex) => {
    // Create a copy to avoid using reference.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    const myStyle = {
      backgroundColor: 'Azure',
      borderRadius: '7px',
      fontSize: 'medium',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        // Means: React.createElement() (under hood)
        <div>
          {
            this.state.persons.map((person, index) => {
              const componentInternalData = person.name === "Max" ? "Max is cool!" : null;
              return (
                <MyPersonVar
                  // Pass Method inside Component to use from inside
                  deletePersAction={() => this.deletePersonHandler(index)}
                  key={person.id}
                  name={person.name}
                >
                  {componentInternalData}
                </MyPersonVar>
              )
            })
          }
        </div>
      );
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <button
            style={myStyle}
            onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>

          {persons}

        </div>
      </div>
    );
  }
}

export default App;
