import React, { useState } from 'react';

interface EmailStepProps {
    cb: (field: string, value: string) => void,
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
    const [email, setEmail] = useState('');
    const [warningMessage, setWarningMessage] = useState('');
    const fieldName = 'Email';

    return <>
        <div className={'warning'}>{warningMessage}</div>
        <div>{fieldName}: <input type='email' onChange={({target: {value}}) => {setEmail(value)}} value={email}></input></div>
        <button onClick={() => onClickNext()}>Next</button>
    </>;

    function onClickNext(){
        if (!isEmailValid()) return;
        props.cb('email', email)
    }

    function isEmailValid() {
        if (email.trim() === '') {
            setWarningMessage(`${fieldName} is required`);
            return false;
        }
        if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,)) {
            setWarningMessage(`Please enter a valid email`);
            return false;
        }
        return true;
    }
};

export default EmailStep;