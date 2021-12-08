import { useContext } from 'react';

import { InvoicesContext } from '../../context/invoices-context';

import Button from '../buttons/Button';
import Input from './Input';

import { FormStyled } from '../../styled/wrappers.styled';

import { newDataObject } from './NewDataObject';

const FormBody = ({ formType }) => {
    const { invoice } = useContext(InvoicesContext);

    let formObject;

    if (formType) {
        formObject = invoice[0];
    } else {
        formObject = newDataObject;
    }

    const {
        clientName,
        clientEmail,
        createdAt,
        paymentTerms,
        description,
        items,
        senderAddress,
        clientAddress,
    } = formObject;

    return (
        <>
            <p>{formType ? formType : 'Add new form'}</p>
            <FormStyled>
                <p>Bill From</p>
                {/* Sender Address */}
                {Object.entries(senderAddress).map(([key, value]) => {
                    return <Input initialValue={value} labelText={key} />;
                })}
                <p>Bill To</p>
                {/* Client Data */}
                <Input initialValue={clientName} labelText="Client Name" />
                <Input initialValue={clientEmail} labelText="Client E-mail" />
                {/* Client Address */}
                {Object.entries(clientAddress).map(([key, value]) => {
                    return (
                        <Input
                            type="text"
                            initialValue={value}
                            labelText={key}
                        />
                    );
                })}
                {/* Date, Terms, Description */}
                <Input
                    type="date"
                    initialValue={createdAt}
                    labelText="Invoice Date"
                />
                <Input
                    initialValue={paymentTerms}
                    labelText="Payment Terms"
                    type="text"
                />
                <Input
                    initialValue={description}
                    labelText="Project / Description"
                />
                {/* Item List */}
                <p>Item List</p>
                {Object.entries(items).map(([key, value], i) => {
                    console.log(key, value);
                    return (
                        <div>
                            <p>Item {i + 1}</p>

                            {Object.entries(value).map(([key, value], i) => {
                                return (
                                    <Input
                                        type="text"
                                        initialValue={value}
                                        labelText={key}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
                <Button text="+ Add New Item" />

                {formType ? (
                    <div>
                        <Button text="Cancel" />
                        <Button text="Save Changes" />
                    </div>
                ) : (
                    <div>
                        <Button text="Discard" />
                        <Button text="Save As Draft" />
                        <Button text="Save & Send" />
                    </div>
                )}
            </FormStyled>
        </>
    );
};

export default FormBody;
