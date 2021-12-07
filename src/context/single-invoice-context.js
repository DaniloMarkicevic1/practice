import { createContext } from 'react';

export const SingleInvoiceContext = createContext();

const SingleInvoiceProvider = ({
    children,
    invoice,
    setInvoice,
    toggleForm,
    setToggleForm,
    deleteInvoice,
}) => {
    const markAsPaid = () => {
        setInvoice([...invoice], (invoice[0].status = 'paid'));
    };

    return (
        <SingleInvoiceContext.Provider
            value={{
                markAsPaid,
                invoice,
                toggleForm,
                setToggleForm,
                deleteInvoice,
            }}
        >
            {children}
        </SingleInvoiceContext.Provider>
    );
};

export default SingleInvoiceProvider;
