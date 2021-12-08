import { useNavigate } from 'react-router';

import InvoiceBody from './InvoiceBody';
import GoBackBtn from '../../buttons/GoBackBtn';
import SelectedInvoiceButtons from './SelectedInvoiceButtons';

const SelectedInvoice = () => {
    const navigate = useNavigate();
    return (
        <>
            <GoBackBtn fn={() => navigate('/')} />
            <InvoiceBody />
            <SelectedInvoiceButtons />
        </>
    );
};

export default SelectedInvoice;
