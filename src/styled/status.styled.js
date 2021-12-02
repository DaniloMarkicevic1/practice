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

export const StatusWrap = styled.div`
    display: flex;
    flex-direction: row;
    border: 8px;
    background-color: ${({ theme }) => theme.colors.statusBg};
    align-items: center;
    justify-content: center;
    color: black;
`;
