import { useContext } from 'react';

import SelectedInvoice from '../components/invoiceSection/SelectedInvoice';

import Context from '../context/context';

import SingleInvoiceProvider from '../context/single-invoice-context';

const SingeInvoicePage = () => {
    const { invoice } = useContext(Context);

    return (
        <>
            <SingleInvoiceProvider invoice={invoice}>
                <SelectedInvoice />
            </SingleInvoiceProvider>
        </>
    );
};

export default SingeInvoicePage;
