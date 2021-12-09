import useInput from '../../hooks/useInput';

import { InputStyled, LabelStyled } from '../../styled/input.styled';

const Input = ({
    type,
    initialValue,
    label,
    labelText,
    changeValueHandler,
}) => {
    const { valueChangeHandler, value: enteredValue } = useInput({
        initialValue,
    });

    return (
        <>
            <LabelStyled htmlFor={label}>
                {labelText}
                <InputStyled
                    type={type}
                    htmlFor={label}
                    onInput={(e) => {
                        valueChangeHandler(e);
                        changeValueHandler(label, e.target.value);
                    }}
                    value={enteredValue}
                />
            </LabelStyled>
        </>
    );
};
export default Input;
