import { Route, Routes } from 'react-router';

import Header from './components/header/Header';
import InvoicesContextProvider from './context/invoices-context';
import InvoicesPage from './pages/InvoicesPage';
import SingleInvoicePage from './pages/SingleInvoicePage';

function App() {
    return (
        <>
            <Header />
            <InvoicesContextProvider>
                <Routes>
                    <Route path="/" exact element={<InvoicesPage />} />
                    <Route path="/card" exact element={<SingleInvoicePage />} />
                </Routes>
            </InvoicesContextProvider>
        </>
    );
}

export default App;
