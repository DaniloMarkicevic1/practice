import { useState } from 'react';

import Context from './context';

import InvoicesData from '../data/data.json';

const InvoicesContextProvider = (props) => {
    const [data, setData] = useState(InvoicesData);

    const [invoice, setInvoice] = useState([]);

    const getInvoice = (id) => {
        setInvoice(data.filter((item) => item.id === id));
    };

    return (
        <Context.Provider value={{ data, setData, invoice, getInvoice }}>
            {props.children}
        </Context.Provider>
    );
};

export default InvoicesContextProvider;
