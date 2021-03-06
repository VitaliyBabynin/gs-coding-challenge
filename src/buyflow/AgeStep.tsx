import React, { useState } from 'react';

interface AgeStepProps {
    cb: (field: string, value: number) => void,
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
    const [age, setAge] = useState(0);
    const [warningMessage, setWarningMessage] = useState('');
    const fieldName = 'Age';

    return <>
        <div className={'warning'}>{warningMessage}</div>
        <div>{fieldName}: <input type='number' onChange={({target: {value}}) => {
            setAge(Number(value))
        }} value={age}/></div>
        <button onClick={() => onClickNext()}>Next</button>
    </>;

    function onClickNext() {
        if (!isAgeValid()) return;
        props.cb('age', age)
    }

    function isAgeValid() {
        if (!age) {
            setWarningMessage(`Age is required`);
            return false;
        }
        if (age < 18) {
            setWarningMessage(`Age must be at least 18`);
            return false;
        }
        if (age > 99) {
            setWarningMessage(`Age must be under 99`);
            return false;
        }
        return true;
    }
};

export default AgeStep;