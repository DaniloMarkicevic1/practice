import InvoiceList from '../components/invoiceSection/InvoiceList';
import InvoicesContextProvider from '../context/invoices-context';
const InvoicesPage = (props) => {
    return (
        <>
            <InvoicesContextProvider>
                <InvoiceList />
            </InvoicesContextProvider>
        </>
    );
};

export default InvoicesPage;
