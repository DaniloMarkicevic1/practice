import { Route, Routes } from 'react-router';

import Header from './components/header/Header';
import InvoicesPage from './pages/InvoicesPage';
import SingleInvoicePage from './pages/SingleInvoicePage';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" exact element={<InvoicesPage />} />
                <Route path="/card" exact element={<SingleInvoicePage />} />
            </Routes>
        </>
    );
}

export default App;
