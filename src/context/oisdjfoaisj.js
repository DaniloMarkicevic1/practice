import { createContext, useState } from 'react';

export const Asd = createContext();

const AsdProvider = (props) => {
    const [test, setTest] = useState('asd');

    return (
        <Asd.Provider value={{ test, setTest }}>{props.children}</Asd.Provider>
    );
};

export default AsdProvider;
