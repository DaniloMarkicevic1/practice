import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: ${({ theme, type }) => type === 'new' && '16px 14px 16px 46px'};
    width: 100%;
    border: none;
    background-color: ${({ theme, type }) =>
        type === 'new' && theme.colors.btnPrimary};
    border-radius: ${({ theme }) => theme.radius.btnRadius};
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme, type }) => type === 'new' && theme.colors.white};
    font-weight: bold;
`;
