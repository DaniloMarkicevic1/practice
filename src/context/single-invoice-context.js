import Context from './context';

const SingleInvoiceProvider = ({ children, invoice }) => {
    return <Context.Provider value={{ invoice }}>{children}</Context.Provider>;
};

export default SingleInvoiceProvider;
