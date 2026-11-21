import React, { Component } from 'react';

const myPerson = (props) => {
    return (
        <p>
            I'm a Person Component! <br />
            My name is {props.name}. <br />
            I am {Math.floor(Math.random() * 100)} years old. <br />
            {/* Included element:  */} <b> {props.children} </b>
        </p>
    );
};

export default myPerson;