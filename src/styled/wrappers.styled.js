import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 1440px) {
        padding-left: 72px;
        max-width: 730px;
        margin: 0 auto;
    }
`;

export const Wrapper = styled.section`
    display: grid;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    margin: 16px 24px;
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
    @media (min-width: 768px) {
        margin: 16px 48px;

        grid-template-areas: 'id name date total status';
    }
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
    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

export const Img = styled.img``;

export const InvoiceHeaderWrapper = styled.section`
    display: flex;
    flex-direction: row;
    padding: ${({ wrapAll }) => wrapAll && '32px 24px 0'};
    @media (min-width: 768px) {
        padding: ${({ wrapAll }) => wrapAll && '56px 48px 0'};
    }
`;
export const InvoiceHeaderItemWrap = styled.div`
    display: flex;
    position: relative;
    flex-direction: ${({ direction }) =>
        direction === 'row' ? 'row' : 'column'};
    justify-content: ${({ filterText }) =>
        filterText ? 'unset' : 'space-between'};
    width: ${({ filterText }) => (filterText ? 'unset' : '100%')};
    margin: ${({ filterText }) => filterText && '0 15px 0 0'};
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

export const AddressWrap = styled.section``;

export const ItemsWrapper = styled.section``;

export const FormWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    color: white;
    width: 100%;
    z-index: 3;
`;

export const GoBackWrapper = styled.div`
    padding: ${({ form }) => (form ? '32px 0 24px 24px' : '32px 0 32px 24px')};
`;

export const FormStyled = styled.form`
    width: 60%;
    padding: 24px;
`;
