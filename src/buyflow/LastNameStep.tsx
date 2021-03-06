import React, { useState } from 'react';

interface LastNameStepProps {
    cb: (field: string, value: string) => void,
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
    const [lastName, setLastName] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const fieldName = 'Last Name';

    return <>
        <div className={'warning'}>{warningMessage}</div>
        <div>{fieldName}: <input type='string' onChange={({target: {value}}) => {setLastName(value)}} value={lastName}></input></div>
        <button onClick={() => onClickNext()}>Next</button>
    </>;

    function onClickNext(){
        if (!isLastNameValid()) return;
        props.cb('lastName', lastName)
    }

    function isLastNameValid(){
        if (lastName.trim() === '') {
            setWarningMessage(`${fieldName} is required`);
            return false;
        }
        if (/[^a-zA-Z -]/.test(lastName)) {
            setWarningMessage(`Invalid characters`);
            return false;
        }
        if (lastName.trim().length < 3) {
            setWarningMessage(`${fieldName} needs to be at least three characters`);
            return false;
        }
        return true;
    }
};

export default LastNameStep;