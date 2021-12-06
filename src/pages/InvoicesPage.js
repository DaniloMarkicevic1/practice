import ReactDom from 'react-dom';
import Form from '../components/form/Form';
import InvoiceList from '../components/invoiceSection/InvoiceList';

const InvoicesPage = () => {
    return (
        <>
            <InvoiceList />
            {ReactDom.createPortal(
                <Form />,
                document.querySelector('#form-new-root')
            )}
        </>
    );
};

export default InvoicesPage;
