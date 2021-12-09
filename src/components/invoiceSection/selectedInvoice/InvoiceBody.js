import { useContext } from 'react';

import { SingleInvoiceContext } from '../../../context/single-invoice-context';

import InvoiceStatus from '../InvoiceStatus';

import * as T from '../../../styled/text.styled';
import * as W from '../../../styled/wrappers.styled';

const InvoiceBody = () => {
    const { invoice } = useContext(SingleInvoiceContext);
    console.log(invoice);
    const {
        id,
        description,
        status,
        total,
        clientEmail,
        clientName,
        clientAddress,
        senderAddress,
        paymentDue,
        createdAt,
        items,
    } = invoice[0];

    const address = (address) => {
        return Object.values(address).map((value, i) => {
            return <T.Text key={Math.random()}>{value}</T.Text>;
        });
    };

    const itemsList = (items) => {
        return Object.values(items).map(({ name, quantity, price, total }) => {
            return (
                <>
                    <div key={Math.random()}>
                        <T.Text>{name}</T.Text>
                        <T.Text>
                            {quantity} x ${price}
                        </T.Text>
                        <T.Text>${total}</T.Text>
                    </div>
                </>
            );
        });
    };

    return (
        <>
            {/* Status */}
            <T.Text>Status</T.Text>
            <InvoiceStatus status={status} />
            {/* ID & Description */}
            <T.Text>#{id}</T.Text>
            <T.Text>{description}</T.Text>
            {/* Sender Address */}
            <W.AddressWrap>{address(senderAddress)}</W.AddressWrap>
            {/* Due and Created at Dates */}
            <T.Text>InvoiceDate </T.Text>
            <T.Text>{createdAt}</T.Text>
            <T.Text>Payment Due </T.Text>
            <T.Text>{paymentDue}</T.Text>
            {/* Bill to */}
            <T.Text>Bill To </T.Text>
            <T.Text>{clientName}</T.Text>
            {/* Client Address */}
            <W.AddressWrap>{address(clientAddress)}</W.AddressWrap>
            {/* Email */}
            <T.Text>Sent to </T.Text>
            <T.Text>{clientEmail}</T.Text>
            {/* Items */}
            <W.ItemsWrapper>{itemsList(items)}</W.ItemsWrapper>
            {/* Total Amount */}
            <T.Text>Amount Due</T.Text>
            <T.Text>${total}</T.Text>
        </>
    );
};

export default InvoiceBody;
