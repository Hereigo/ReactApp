import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyPersonVar from './MyPerson/MyPerson';

// class App extends Component {
const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Alex" },
      { name: "Max" },
      { name: "Felix" }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({  // update\mutate "state"
      persons: [
        { name: 'HIDDEN' },
        { name: 'HIDDEN' },
        { name: 'HIDDEN' }
      ]
    });
  };

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">

        <button onClick={switchNameHandler}>Switch Name</button>

        <MyPersonVar name={personsState.persons[0].name} />
        <MyPersonVar name={personsState.persons[1].name} />
        <MyPersonVar name={personsState.persons[2].name} > Yahoo! </MyPersonVar>

      </p>
    </div>
  );
}

export default app;


