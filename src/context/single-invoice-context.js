import { createContext, useContext } from 'react';

import { InvoicesContext } from './invoices-context';

export const SingleInvoiceContext = createContext();
const SingleInvoiceProvider = ({ children }) => {
    const { invoice, setInvoice, data, setData } = useContext(InvoicesContext);

    const markAsPaid = () => {
        setInvoice([...invoice], (invoice[0].status = 'paid'));
    };

    const deleteInvoice = () => {
        setData(data.filter((item) => item.id !== invoice[0].id));
        // deletePrompt
    };

    return (
        <SingleInvoiceContext.Provider
            value={{
                invoice,
                markAsPaid,
                deleteInvoice,
            }}
        >
            {children}
        </SingleInvoiceContext.Provider>
    );
};

export default SingleInvoiceProvider;
