import styled from 'styled-components';

export const InputStyled = styled.input`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin-top: 7px;
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    border: none;
    border-radius: ${({ theme }) => theme.radius.inputRadius};
    padding: 17px 0 16px 20px;
    width: 100%;
    &:hover,
    &:active,
    &:focus {
        outline: ${({ theme }) => theme.border.blue};
    }
`;
export const LabelStyled = styled.label`
    color: ${({ theme }) => theme.colors.hashtag};
`;
