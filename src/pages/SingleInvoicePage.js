import { useContext } from 'react';

import SingleInvoiceProvider from '../context/single-invoice-context';
import { FormContext } from '../context/form-context';

import Form from '../components/form/Form';
import SelectedInvoice from '../components/invoiceSection/selectedInvoice/SelectedInvoice';
import { SelectedInvoiceWrapper } from '../styled/wrappers.styled';
const SingeInvoicePage = () => {
    const { toggleForm } = useContext(FormContext);
    return (
        <>
            <SingleInvoiceProvider>
                {toggleForm && <Form text="edit-form" />}
                <SelectedInvoiceWrapper>
                    <SelectedInvoice />
                </SelectedInvoiceWrapper>
            </SingleInvoiceProvider>
        </>
    );
};

export default SingeInvoicePage;
