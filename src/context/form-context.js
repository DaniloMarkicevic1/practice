import { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [toggleForm, setToggleForm] = useState(false);

    return (
        <FormContext.Provider
            value={{
                toggleForm,
                setToggleForm,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;
