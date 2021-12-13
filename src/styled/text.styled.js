import styled from 'styled-components';

export const Text = styled.p`
    color: ${({ theme, status }) =>
        (status === 'paid' && theme.colors.statusPaid) ||
        (status === 'pending' && theme.colors.statusPending) ||
        (status === 'draft' && theme.colors.white) ||
        theme.colors.white};
    grid-area: ${({ area }) =>
        (area === 'id' && 'id') ||
        (area === 'name' && 'name') ||
        (area === 'date' && 'date') ||
        (area === 'status' && 'status') ||
        (area === 'text' && 'text') ||
        (area === 'total' && 'total')};
    align-self: ${({ area }) => area && 'center'};

    text-transform: ${({ area }) => area === 'status' && 'capitalize'};
    font-weight: ${({ bold, area }) =>
        (bold === 'true' && 'bold') ||
        (area === 'status' && 'bold') ||
        (area === 'id' && 'bold') ||
        (area === 'total' && 'bold')};
    padding: ${({ status }) => status && '0 0 0 8px'};
    font-size: ${({ theme }) => theme.font.size.s};
`;

export const StatusCircle = styled.span`
    width: 8px;
    height: 8px;
    border-radius: ${({ theme }) => theme.radius.circleRadius};
    background-color: ${({ theme, status }) =>
        (status === 'paid' && theme.colors.statusPaid) ||
        (status === 'pending' && theme.colors.statusPending) ||
        (status === 'draft' && theme.colors.white)};
    margin-right: 5px;
`;
