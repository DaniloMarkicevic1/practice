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
    margin-top: ${({ singleInvoice }) =>
        singleInvoice === 'true' ? '0px' : '12px'};
    background-color: ${({ theme }) => theme.colors.statusBg};
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        margin-top: 0;
        grid-area: ${({ singleInvoice }) =>
            singleInvoice === 'true' && 'status'};
    }
`;

export const SingleInvoiceStatusWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px 24px 27px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    @media (min-width: 768px) {
        display: ${({ grid }) => grid === 'yes' && 'grid'};
        margin-top: 0;
        grid-template-areas: 'text status . . . buttons';
    }
`;

export const SingleInvoiceBodyWrap = styled.div`
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    display: grid;
    margin: 16px 0;
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    grid-template-areas:
        'idAndDesc .'
        'senderAddress .'
        'dates clientAddress'
        'dates clientAddress'
        'email email'
        'items items'
        'buttons buttons';
    @media (min-width: 768px) {
        grid-template-areas:
            'idAndDesc . senderAddress'
            'dates clientAddress email'
            'dates clientAddress .'
            'items items items';
    }
    gap: 5px;
`;

export const SingleInvoiceItemWrap = styled.div`
    grid-area: ${({ area }) =>
        (area === 'idAndDesc' && 'idAndDesc') ||
        (area === 'senderAddress' && 'senderAddress') ||
        (area === 'clientAddress' && 'clientAddress') ||
        (area === 'dates' && 'dates') ||
        (area === 'items' && 'items') ||
        (area === 'email' && 'email') ||
        (area === 'buttons' && 'buttons')};
    padding: ${({ area }) =>
        // (area === 'idAndDesc' && '') ||
        (area === 'senderAddress' && '24px 0 0 0') ||
        (area === 'clientAddress' && '0') ||
        (area === 'dates' && '24px 0 0 0') ||
        (area === 'items' && '24px 0') ||
        (area === 'email' && '24px 0 0 0')};

    line-height: ${({ theme, area }) =>
        (area === 'idAndDesc' && theme.lineHeight.xs) ||
        (area === 'senderAddress' && theme.lineHeight.s) ||
        (area === 'clientAddress' && theme.lineHeight.s) ||
        (area === 'dates' && theme.lineHeight.mobileM) ||
        (area === 'items' && theme.lineHeight.xs) ||
        (area === 'email' && theme.lineHeight.mobileM)};
    display: ${({ query }) =>
        (query === 'largeScreen' && 'none') ||
        (query === 'smallScreen' && 'flex')};
    flex-direction: row;
    text-align: ${({ area }) => area === 'senderAddress' && 'right'};
    @media (min-width: 768px) {
        display: ${({ query }) =>
            (query === 'largeScreen' && 'flex') ||
            (query === 'smallScreen' && 'none')};
        padding: ${({ area }) =>
            (area === 'senderAddress' && '0 0 0 0') ||
            (area === 'clientAddress' && '0') ||
            (area === 'dates' && '0 0 0 0') ||
            (area === 'items' && '0 0') ||
            (area === 'email' && '0 0 0 0')};
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

export const SelectedInvoiceWrapper = styled.section`
    padding: 0 24px 24px;
`;

export const AddressWrap = styled.section``;

export const ItemsWrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: ${({ theme }) => theme.radius.smallRadius};
    text-align: center;
    div {
        padding: 15px 0;
    }
`;

export const FormWrapper = styled.div`
    padding: 24px;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    color: white;
    width: 100%;
    z-index: 3;
`;

export const GoBackWrapper = styled.div`
    padding: ${({ form }) => (form ? '32px 0 24px 0px' : '32px 0 32px 0px')};
`;

export const FormStyled = styled.form`
    width: 60%;
    padding: 24px;
`;
