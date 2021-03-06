import React, { useState } from 'react';

interface FirstNameStepProps {
    cb: (field: string, value: string) => void,
}

const FirstNameStep: React.FC<FirstNameStepProps> = (props) => {
    const [firstName, setFirstName] = useState('');
    return <>
        <div>First Name: <input type='string' onChange={({target: {value}}) => {setFirstName(value)}} value={firstName}></input></div>
        <button onClick={() => props.cb('firstName', firstName)}>Next</button>
    </>;
};

export default FirstNameStep;