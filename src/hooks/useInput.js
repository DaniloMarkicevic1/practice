import { useState } from 'react';

const useInput = ({ initialValue }) => {
    const [enteredValue, setEnteredValue] = useState(initialValue);

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    return {
        valueChangeHandler,
        value: enteredValue,
        initialValue: initialValue,
    };
};

export default useInput;
