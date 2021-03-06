import React, { useState } from 'react';

interface FirstNameStepProps {
    cb: (field: string, value: string) => void,
}

const FirstNameStep: React.FC<FirstNameStepProps> = (props) => {
    const [firstName, setFirstName] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const fieldName = 'First Name';

    return <>
        <div className={'warning'}>{warningMessage}</div>
        <div>{fieldName}: <input type='string' onChange={({target: {value}}) => {setFirstName(value)}} value={firstName}></input></div>
        <button onClick={() => onClickNext()}>Next</button>
    </>;

    function onClickNext(){
        if (!isFirstNameValid()) return;
        props.cb('firstName', firstName)
    }

    function isFirstNameValid(){
        if (firstName.trim() === '') {
            setWarningMessage(`${fieldName} is required`);
            return false;
        }
        if (/[^a-zA-Z -]/.test(firstName)) {
            setWarningMessage(`Invalid characters`);
            return false;
        }
        if (firstName.trim().length < 3) {
            setWarningMessage(`${fieldName} needs to be at least three characters`);
            return false;
        }
        return true;
    }
};

export default FirstNameStep;