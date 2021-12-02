import { useState } from 'react';

import Context from './context';

import InvoicesData from '../data/data.json';

const InvoicesContextProvider = (props) => {
    const [data, setData] = useState(InvoicesData);

    return (
        <Context.Provider value={{ data, setData }}>
            {props.children}
        </Context.Provider>
    );
};

export default InvoicesContextProvider;
