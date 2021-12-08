import { useContext } from 'react';

import { FormContext } from '../../../context/form-context';
import { SingleInvoiceContext } from '../../../context/single-invoice-context';

import Button from '../../buttons/Button';

const SelectedInvoiceButtons = () => {
    const { markAsPaid, deleteInvoice } = useContext(SingleInvoiceContext);
    const { toggleForm, setToggleForm } = useContext(FormContext);
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
