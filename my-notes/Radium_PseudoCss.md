### To allow using pseudo classes and media-queries in React app install Radium:

```sh
npm install --save radium
```
### Setup in Component:

```js
import Radium from 'radium';

const myComponent = (props) => {

    const myStyles = {
        '@media (max-width: 500px)': {
            backgroundColor: 'lightGrey'
        }
    }

    return (
        <div style={myStyles}>
            {/* 
                some code ...
            */}
        </div>
    );
};

export default Radium(myComponent);

```
### Setup in Root App:

```js
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  render() {

    const myStyles = {};

    myStyles[':hover'] = {
        backgroundColor: 'green'
    }

    return (

      // For Radium MediaQueries
      <StyleRoot>

        <div className="App" style={myStyles}>
            {/* 
                some code ... 
            */}
        </div>
        
      </StyleRoot>
    );
  }
}

export default Radium(App);

```