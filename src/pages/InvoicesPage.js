import { useContext } from 'react';

import { FormContext } from '../context/form-context';

import Form from '../components/form/Form';
import InvoiceList from '../components/invoiceSection/InvoiceList';

const InvoicesPage = () => {
    const { toggleForm } = useContext(FormContext);

    return (
        <>
            <InvoiceList />
            {toggleForm && <Form />}
        </>
    );
};

export default InvoicesPage;
