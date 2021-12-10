import styled from 'styled-components';

export const Header = styled.section`
    display: grid;
    grid-template-areas: 'Logo IconAvatar';
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    max-height: 72px;
    @media (min-width: 1440px) {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        left: 0;
    }
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
    @media (min-width: 768px) {
        padding: 24px 20px;
    }
`;

export const Line = styled.div`
    max-height: 72px;
    border-right: 1px solid #494e6e;
    @media (min-width: 1440px) {
        width: 100%;
        border-right: none;
        border-top: 1px solid #494e6e;
    }
`;

export const Div = styled.div`
    grid-area: IconAvatar;
    align-content: center;
    display: flex;
    flex-direction: row;
    @media (min-width: 1440px) {
        flex-direction: column;
        align-items: center;
    }
    svg {
        padding: 26px 23px 26px 0;
        @media (min-width: 1440px) {
            padding: 0 0 28px 0;

            border-right: none;
        }
    }
`;
