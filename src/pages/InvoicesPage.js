import { useContext } from 'react';
import Form from '../components/form/Form';
import InvoiceList from '../components/invoiceSection/InvoiceList';
import Context from '../context/context';

const InvoicesPage = () => {
    const { toggleForm } = useContext(Context);

    return (
        <>
            <InvoiceList />
            {toggleForm && <Form text="add new form" />}
        </>
    );
};

export default InvoicesPage;
