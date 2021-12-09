import { useContext } from 'react';

import { InvoicesContext } from '../../context/invoices-context';

import Button from '../buttons/Button';
import Input from './Input';

import { FormStyled } from '../../styled/wrappers.styled';

import { newDataObject } from './NewDataObject';
import { FormContext } from '../../context/form-context';

const FormBody = ({ formType }) => {
    const { invoice, setInvoice, data, setData } = useContext(InvoicesContext);
    const { toggleForm, setToggleForm } = useContext(FormContext);
    let formObject;
    if (formType) {
        formObject = { ...invoice[0] };
    } else {
        formObject = { ...newDataObject };
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

    const changeValueHandler = (valueToChange, inputValue) => {
        switch (valueToChange) {
            case 'clientName':
                formObject.clientName = inputValue;
                break;
            case 'clientEmail':
                formObject.clientEmail = inputValue;
                break;

            default:
                break;
        }
    };
    const submitFormHandler = (e) => {
        e.preventDefault();
        if (formType) {
            // Edit Invoice
            data.forEach((item, i) => {
                if (item.id === formObject.id) {
                    setData((data) => data, (data[i] = formObject));
                    setInvoice(
                        data.filter((item) => item.id === formObject.id)
                    );
                }
            });
        } else {
            // Add new Invoice
            formObject.status = 'pending';
            formObject.id = 'BT3020';

            const newData = [...data];
            newData.push(formObject);

            setData([...newData]);
        }
        setToggleForm(!toggleForm);
    };
    return (
        <>
            <p>{formType ? formType : 'Add new form'}</p>
            <FormStyled
                onSubmit={(e) => {
                    submitFormHandler(e);
                }}
            >
                <p>Bill From</p>
                {/* asd */}
                {/* Sender Address */}
                {Object.entries(senderAddress).map(([key, value, i]) => {
                    return (
                        <Input
                            key={'sender' + key}
                            initialValue={value}
                            labelText={key}
                        />
                    );
                })}
                <p>Bill To</p>
                {/* Client Data */}
                <Input
                    initialValue={clientName}
                    labelText="Client Name"
                    changeValueHandler={changeValueHandler}
                    label="clientName"
                />
                <Input
                    initialValue={clientEmail}
                    label="clientEmail"
                    labelText="Client E-mail"
                    changeValueHandler={changeValueHandler}
                />
                {/* Client Address */}
                {Object.entries(clientAddress).map(([key, value]) => {
                    return (
                        <Input
                            key={'client' + key}
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
                    return (
                        <div key={key}>
                            <p>Item {i + 1}</p>

                            {Object.entries(value).map(([key, value], i) => {
                                return (
                                    <Input
                                        key={'item' + key}
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
                        <Button text="Save Changes" type="submit" />
                    </div>
                ) : (
                    <div>
                        <Button text="Discard" />
                        <Button text="Save As Draft" />
                        <Button text="Save & Send" type="submit" />
                    </div>
                )}
            </FormStyled>
        </>
    );
};

export default FormBody;
