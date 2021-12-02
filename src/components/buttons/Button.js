import * as B from '../../styled/button.styled';

const Button = ({ text, fn, type }) => {
    return (
        <B.StyledButton onClick={fn} type={type}>
            {text}
        </B.StyledButton>
    );
};

export default Button;
