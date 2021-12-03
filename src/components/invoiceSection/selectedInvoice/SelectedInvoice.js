import GoBackBtn from '../../buttons/GoBackBtn';
import InvoiceBody from './InvoiceBody';

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
