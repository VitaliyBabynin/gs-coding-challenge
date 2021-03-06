import React, { useState } from 'react';

interface LastNameStepProps {
    cb: (field: string, value: string) => void,
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
    const [lastName, setLastName] = useState('');
    return <>
        <div>Last Name: <input type='string' onChange={({target: {value}}) => {setLastName(value)}} value={lastName}></input></div>
        <button onClick={() => onClickNext()}>Next</button>
    </>;
    function onClickNext(){
        props.cb('lastName', lastName)
    }
};

export default LastNameStep;