import { Route, Routes } from 'react-router';

import Header from './components/header/Header';
import InvoicesContextProvider from './context/invoices-context';
import AsdProvider from './context/oisdjfoaisj';
import InvoicesPage from './pages/InvoicesPage';
import SingleInvoicePage from './pages/SingleInvoicePage';
function App() {
    return (
        <>
            <AsdProvider>
                <Header />
                <InvoicesContextProvider>
                    <Routes>
                        <Route path="/" exact element={<InvoicesPage />} />
                        <Route
                            path="/card"
                            exact
                            element={<SingleInvoicePage />}
                        />
                    </Routes>
                </InvoicesContextProvider>
            </AsdProvider>
        </>
    );
}

export default App;
