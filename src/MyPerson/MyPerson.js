import React from 'react';

const myPerson = (props) => {
    return (
        // Method can be passed as a Property.
        <p onClick={props.myClickProp}>
            I'm a Person Component! <br />
            My name is {props.name}. <br />
            I am {Math.floor(Math.random() * 100)} years old. <br />
            {/* Included element:  */} <b> {props.children} </b>

            {/* <input type='text' onChange={ } /> */}

        </p>
    );
};

export default myPerson;