import { useContext } from 'react';

import SingleInvoiceProvider from '../context/single-invoice-context';
import { FormContext } from '../context/form-context';

import Form from '../components/form/Form';
import SelectedInvoice from '../components/invoiceSection/selectedInvoice/SelectedInvoice';

const SingeInvoicePage = () => {
    const { toggleForm } = useContext(FormContext);
    return (
        <>
            <SingleInvoiceProvider>
                {toggleForm && <Form text="edit-form" />}

                <SelectedInvoice />
            </SingleInvoiceProvider>
        </>
    );
};

export default SingeInvoicePage;
