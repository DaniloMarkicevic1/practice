import { createContext, useState } from 'react';
import InvoicesData from '../data/data.json';

export const InvoicesContext = createContext();

const InvoicesContextProvider = (props) => {
    const [data, setData] = useState(InvoicesData);

    const [invoice, setInvoice] = useState([]);

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
            }}
        >
            {props.children}
        </InvoicesContext.Provider>
    );
};

export default InvoicesContextProvider;
