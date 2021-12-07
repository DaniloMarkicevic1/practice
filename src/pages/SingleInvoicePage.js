import { useContext } from 'react';

import Context from '../context/context';
import SingleInvoiceProvider from '../context/single-invoice-context';

import Form from '../components/form/Form';
import SelectedInvoice from '../components/invoiceSection/selectedInvoice/SelectedInvoice';
import { Asd } from '../context/oisdjfoaisj';

const SingeInvoicePage = () => {
    const { invoice, setInvoice, toggleForm, setToggleForm, deleteInvoice } =
        useContext(Context);

    const { test } = useContext(Asd);
    console.log(test);
    return (
        <>
            <SingleInvoiceProvider
                invoice={invoice}
                setInvoice={setInvoice}
                toggleForm={toggleForm}
                setToggleForm={setToggleForm}
                deleteInvoice={deleteInvoice}
            >
                {toggleForm && <Form text="edit-form" />}

                <SelectedInvoice />
            </SingleInvoiceProvider>
        </>
    );
};

export default SingeInvoicePage;
