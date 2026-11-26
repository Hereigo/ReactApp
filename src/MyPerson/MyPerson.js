import React from 'react'; // IMPORTANT !
import './MyPerson.css';

const myPerson = (props) => {

    return (

        <div className="Person">

            {/* Method can be passed as a Property. */}
            <p onClick={props.myClickProp}>

                I'm a Person Component!
                <br />
                My name is <b>{props.name}.</b>
                <br />
                I am {Math.floor(Math.random() * 100)} years old.
                <br />

                {/* Child Element Included inside Component's tags */}
                <b> {props.children} </b>
                <br />

                <input type='button' onClick={props.deletePersAction} value='Delete' />

            </p>
        </div>
    );
};

export default myPerson;