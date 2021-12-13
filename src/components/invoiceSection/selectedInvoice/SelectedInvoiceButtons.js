import { useContext } from 'react';

import { FormContext } from '../../../context/form-context';
import { SingleInvoiceContext } from '../../../context/single-invoice-context';
import { SingleInvoiceItemWrap } from '../../../styled/wrappers.styled';

import Button from '../../buttons/Button';

const SelectedInvoiceButtons = () => {
    const { markAsPaid, deleteInvoice } = useContext(SingleInvoiceContext);
    const { toggleForm, setToggleForm } = useContext(FormContext);
    return (
        <>
            <SingleInvoiceItemWrap area="buttons">
                <Button
                    type="edit"
                    text="Edit"
                    fn={() => {
                        setToggleForm(!toggleForm);
                    }}
                ></Button>
                <Button type="delete" text="Delete" fn={deleteInvoice}></Button>
                <Button
                    type="mark"
                    text="Mark as paid"
                    fn={markAsPaid}
                ></Button>
            </SingleInvoiceItemWrap>
        </>
    );
};

export default SelectedInvoiceButtons;
