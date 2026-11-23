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
    ],
    personsAdditionalStartField: "Additional Start Field"
  });

  const switchNameHandler = () => {
    setPersonsState({  // update\mutate "state"
      persons: [
        { name: 'HIDDEN' },
        { name: 'HIDDEN' },
        { name: 'HIDDEN' }
      ]
      // personsAdditionalStartField: not exists in this state
    });
  };

  // "setPersonsState" - updates only "persons []"
  // and not "otherTestState" - it will remains as is !!!
  const [otherTestState, setOtherTestState] = useState('AAA AAA !!!');

  console.log(personsState, otherTestState);

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App-intro">

        <button onClick={switchNameHandler}>Switch Name</button>

        <MyPersonVar name={personsState.persons[0].name} />
        <MyPersonVar name={personsState.persons[1].name} />
        <MyPersonVar name={personsState.persons[2].name} > Yahoo! </MyPersonVar>

      </div>
    </div>
  );
}

export default app;


