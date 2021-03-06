import React, { useState } from 'react';

interface AgeStepProps {
    cb: (field: string, value: number) => void,
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
    const [age, setAge] = useState(0);
    return <>
        <div>Age: <input type='number' onChange={({target: {value}}) => {setAge(Number(value))}} value={age}></input></div>
        <button onClick={() => onClickNext()}>Next</button>
    </>;
    function onClickNext(){
        props.cb('age', age)
    }
};

export default AgeStep;