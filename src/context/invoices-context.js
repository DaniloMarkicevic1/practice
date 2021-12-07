import { createContext, useState } from 'react';
import InvoicesData from '../data/data.json';

export const InvoicesContext = createContext();

const InvoicesContextProvider = (props) => {
    const [data, setData] = useState(InvoicesData);

    const [invoice, setInvoice] = useState([]);

    const [toggleForm, setToggleForm] = useState(false);

    const deleteInvoice = () => {
        setData(data.filter((item) => item.id !== invoice[0].id));
    };

    const getInvoice = (id) => {
        setInvoice(data.filter((item) => item.id === id));
    };

    return (
        <InvoicesContext.Provider
            value={{
                data,
                setData,
                invoice,
                setInvoice,
                getInvoice,
                toggleForm,
                setToggleForm,
                deleteInvoice,
            }}
        >
            {props.children}
        </InvoicesContext.Provider>
    );
};

export default InvoicesContextProvider;
