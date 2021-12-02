import styled from 'styled-components';

export const Wrapper = styled.section`
    display: grid;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin: 12px;
    border-radius: 8px;
    grid-template-areas:
        'id name'
        'date status'
        'total status';
    &:hover {
        outline: 1px solid blue;
        cursor: pointer;
    }

    justify-content: space-between;
`;

export const StatusWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 104px;
    border-radius: 8px;
    padding: 18px 0px;
    margin-top: 12px;
    background-color: ${({ theme }) => theme.colors.statusBg};
    align-items: center;
    justify-content: center;
    color: black;
`;

export const Img = styled.img``;

export const InvoiceHeaderWrapper = styled.section`
    display: flex;
    flex-direction: row;
    padding: ${({ wrapAll }) => wrapAll && '32px 24px 0'};
`;
export const InvoiceHeaderItemWrap = styled.div`
    display: flex;
    position: relative;
    flex-direction: ${({ direction }) =>
        direction === 'row' ? 'row' : 'column'};
    justify-content: ${({ filter }) => (filter ? 'unset' : 'space-between')};
    width: ${({ filter }) => (filter ? 'unset' : '100%')};
    margin: ${({ filter }) => filter && '0 15px 0 0'};
    .plusIcon {
        position: absolute;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.radius.circleRadius};
        align-self: center;
        padding: 10.5px;
        margin: 6px 8px 6px 6px;
        z-index: 2;
    }
`;
