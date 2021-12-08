import useInput from '../../hooks/useInput';

import { InputStyled, LabelStyled } from '../../styled/input.styled';

const Input = ({ type, initialValue, label, labelText }) => {
    const { valueChangeHandler, value: enteredValue } = useInput({
        initialValue,
    });
    return (
        <>
            <LabelStyled htmlFor={label}>
                <p>{labelText}</p>
                <InputStyled
                    type={type}
                    htmlFor={label}
                    onInput={(e) => {
                        valueChangeHandler(e);
                        console.log(e.target.value);
                    }}
                    value={enteredValue}
                />
            </LabelStyled>
        </>
    );
};
export default Input;
