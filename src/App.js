import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium from 'radium'; // see the bottom !
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
  nameChangedHandler = (event, id) => {

    const personIdx = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const personMod = Object.assign({}, this.state.persons[personIdx]);
    const personMod = {
      ...this.state.persons[personIdx]
    };

    personMod.name = event.target.value;

    const personsMod = [...this.state.persons];
    personsMod[personIdx] = personMod;

    this.setState({ persons: personsMod });
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
      padding: '8px',
      ':hover': {
        backgroundColor: 'violet' // by Radium
      }
    };

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        // Means: React.createElement() (under hood)
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <MyPersonVar
                // Pass Method inside Component to use from inside
                deletePersAction={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                onChangeEvent={(event) => this.nameChangedHandler(event, person.id)}
              >
                {person.name === "Max" ? "Max is cool!" : null}
              </MyPersonVar>
            )
          })}
        </div>
      );

      myStyle.backgroundColor = 'lightgrey';
      myStyle[':hover'] = {
        backgroundColor: 'green'
      }
    }

    // let myClasses = ['red', 'bold'].join(' ');
    let myClasses = [];

    if (this.state.persons.length <= 2) {
      myClasses.push('bold');
    }
    if (this.state.persons.length <= 1) {
      myClasses.push('red');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-intro">

          <p className={myClasses.join(' ')}>The list of Persons:</p>

          <button
            style={myStyle}
            onClick={() => this.togglePersonsHandler()}> Toggle Persons
          </button>

          {persons}

        </div>
      </div>
    );
  }
}

export default Radium(App);
