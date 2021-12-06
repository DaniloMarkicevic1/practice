import InvoiceBody from './InvoiceBody';

import GoBackBtn from '../../buttons/GoBackBtn';
import SelectedInvoiceButtons from './SelectedInvoiceButtons';

const SelectedInvoice = () => {
    return (
        <>
            <GoBackBtn />
            <InvoiceBody />
            <SelectedInvoiceButtons />
        </>
    );
};

export default SelectedInvoice;
