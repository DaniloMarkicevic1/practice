import { Route, Routes } from 'react-router';

import FormContextProvider from './context/form-context';
import InvoicesContextProvider from './context/invoices-context';

import Header from './components/header/Header';
import InvoicesPage from './pages/InvoicesPage';
import SingleInvoicePage from './pages/SingleInvoicePage';
import { Container } from './styled/wrappers.styled';

function App() {
    return (
        <>
            <Container>
                <Header />
                <InvoicesContextProvider>
                    <FormContextProvider>
                        <Routes>
                            <Route path="/" exact element={<InvoicesPage />} />

                            <Route
                                path="/card"
                                exact
                                element={<SingleInvoicePage />}
                            />
                        </Routes>
                    </FormContextProvider>
                </InvoicesContextProvider>
            </Container>
        </>
    );
}

export default App;
