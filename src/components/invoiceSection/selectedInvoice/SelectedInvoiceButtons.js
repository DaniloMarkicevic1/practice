import { useContext } from 'react';

import { InvoicesContext } from '../../../context/invoices-context';

import Button from '../../buttons/Button';

const SelectedInvoiceButtons = () => {
    const { markAsPaid, toggleForm, setToggleForm, deleteInvoice } =
        useContext(InvoicesContext);

    return (
        <>
            <Button
                type="edit"
                text="Edit"
                fn={() => {
                    setToggleForm(!toggleForm);
                }}
            ></Button>
            <Button type="delete" text="Delete" fn={deleteInvoice}></Button>
            <Button type="mark" text="Mark as paid" fn={markAsPaid}></Button>
        </>
    );
};

export default SelectedInvoiceButtons;
