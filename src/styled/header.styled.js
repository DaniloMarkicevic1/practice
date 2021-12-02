import styled from 'styled-components';

export const Header = styled.section`
    display: grid;
    grid-template-areas: 'Logo IconAvatar';
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    max-height: 72px;
`;

export const Logo = styled.img`
    grid-area: Logo;
    padding: 23px 22px;
    background-color: ${({ theme }) => theme.colors.btnPrimary};
`;

export const Avatar = styled.img`
    border-radius: ${({ theme }) => theme.radius.circleRadius};
    width: 32px;
    height: 32px;
    padding: 20px 24px;
`;

export const Div = styled.div`
    grid-area: IconAvatar;
    svg {
        border-right: 1px solid #494e6e;
        padding: 26px 23px 26px 0;
    }
`;
