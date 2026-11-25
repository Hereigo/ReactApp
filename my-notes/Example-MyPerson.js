import React from 'react';
import './MyPerson.css';

const myPerson = (props) => {
    return (
        <div className="Person">
            {/* Method can be passed as a Property. */}
            <p onClick={props.myClickProp}>

                I'm a Person Component! <br />
                My name is {props.name}. <br />
                I am {Math.floor(Math.random() * 100)} years old. <br />
                {/* Included element:  */} <b> {props.children} </b> <br />

                <input type='text' onChange={props.propChanged} />

                {/* <input type='text' onChange={props.propChanged} value={props.name}/> ?????? */}

            </p>
        </div>
    );
};

export default myPerson;