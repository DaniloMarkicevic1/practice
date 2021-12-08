import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyle } from '../styled/themes';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('dark');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeContext.Provider value={{ themeToggler }}>
            <ThemeProvider theme={theme === 'dark' && darkTheme}>
                <GlobalStyle />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
