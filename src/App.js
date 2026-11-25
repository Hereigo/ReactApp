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

  // "this.setState" in a class MERGES the new object into the old state:
  // only "persons" is replaced, "personsAdditionalStartField" and
  // "otherTestState" remain as is !!!
  // (A "useState" setter in a function component REPLACES the whole object instead.)

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: "Alex" },
  //       { name: event.target.value },
  //       { name: "Felix" }
  //     ]
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
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
      color: 'blue',
      bnorderColor: 'blue',
      backgroundColor: 'Azure',
      padding: '8px',
      fontSize: 'medium'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        // Means: React.createElement() (under hood)
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <MyPersonVar
                  key={person.id}
                  deletePersonAct={() => this.deletePersonHandler(index)}
                  name={person.name}
                />
              )
            })
          }

          {/* <MyPersonVar name={this.state.persons[0].name} />
          <MyPersonVar name={this.state.persons[1].name} />        
          <MyPersonVar
            myClickProp={this.switchNameHandler.bind(this, 'Last-LINE-Click')}
            name={this.state.persons[2].name}
            propChanged={this.nameChangedHandler}>
            (Can be clicked also.)
          </MyPersonVar> 
          */}

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
