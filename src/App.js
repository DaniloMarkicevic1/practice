import { Route, Routes } from 'react-router';

import FormContextProvider from './context/form-context';
import InvoicesContextProvider from './context/invoices-context';

import Header from './components/header/Header';
import InvoicesPage from './pages/InvoicesPage';
import SingleInvoicePage from './pages/SingleInvoicePage';

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
