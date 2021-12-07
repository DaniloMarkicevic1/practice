import InvoiceBody from './InvoiceBody';

import GoBackBtn from '../../buttons/GoBackBtn';
import SelectedInvoiceButtons from './SelectedInvoiceButtons';
import { useNavigate } from 'react-router';

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
