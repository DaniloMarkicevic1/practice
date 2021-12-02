import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle } from '../styled/themes';
import Context from './context';

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('dark');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    return (
        <Context.Provider value={{ themeToggler }}>
            <ThemeProvider theme={theme === 'dark' && darkTheme}>
                <GlobalStyle />
                {props.children}
            </ThemeProvider>
        </Context.Provider>
    );
};

export default ThemeContextProvider;
