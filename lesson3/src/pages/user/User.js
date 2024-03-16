import React from 'react';
import classes from './User.module.css';


const User = ({ name, age}) => {

    // console.log(name, age);

    // const userss = {
    //     name: 'Bakyt',
    //     age: 18
    // }
    // console.log(userss.name);
    //
    // const {name} = userss
    //
    // console.log(name);

    return (
        <div>
            <p className={classes.user}>User: {name}</p>
            <p className='user'>User: {name}</p>
            <p className={classes.age}>Age: {age}</p>
        </div>
    );
};

export default User;