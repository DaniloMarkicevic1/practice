import { useContext } from 'react';

import { SingleInvoiceContext } from '../../../context/single-invoice-context';

import InvoiceStatus from '../InvoiceStatus';

import * as T from '../../../styled/text.styled';
import * as W from '../../../styled/wrappers.styled';
import SelectedInvoiceButtons from './SelectedInvoiceButtons';

const InvoiceBody = () => {
    const { invoice } = useContext(SingleInvoiceContext);

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
                        <T.Text bold="true">{name}</T.Text>
                        <T.Text bold="true">
                            {quantity} x ${price}
                        </T.Text>
                        <T.Text bold="true">${total}</T.Text>
                    </div>
                </>
            );
        });
    };

    return (
        <>
            {/* Status */}
            <W.SingleInvoiceStatusWrap grid="yes">
                <T.Text area="text">Status</T.Text>
                <InvoiceStatus status={status} singleInvoice="true" />
                <SelectedInvoiceButtons query="largeScreen" />
            </W.SingleInvoiceStatusWrap>
            {/* ID & Description */}
            <W.SingleInvoiceBodyWrap>
                <W.SingleInvoiceItemWrap area="idAndDesc">
                    <T.Text bold="true">#{id}</T.Text>
                    <T.Text>{description}</T.Text>
                </W.SingleInvoiceItemWrap>
                {/* Sender Address */}
                <W.SingleInvoiceItemWrap area="senderAddress">
                    <W.AddressWrap>{address(senderAddress)}</W.AddressWrap>
                </W.SingleInvoiceItemWrap>
                {/* Due and Created at Dates */}
                <W.SingleInvoiceItemWrap area="dates">
                    <T.Text>InvoiceDate </T.Text>
                    <T.Text bold="true">{createdAt}</T.Text>
                    <T.Text>Payment Due </T.Text>
                    <T.Text bold="true">{paymentDue}</T.Text>
                </W.SingleInvoiceItemWrap>
                {/* Bill to */}
                <W.SingleInvoiceItemWrap area="clientAddress">
                    <T.Text>Bill To </T.Text>
                    <T.Text bold="true">{clientName}</T.Text>
                    {/* Client Address */}
                    <W.AddressWrap>{address(clientAddress)}</W.AddressWrap>
                </W.SingleInvoiceItemWrap>
                {/* Email */}
                <W.SingleInvoiceItemWrap area="email">
                    <T.Text>Sent to </T.Text>
                    <T.Text bold="true">{clientEmail}</T.Text>
                </W.SingleInvoiceItemWrap>
                {/* Items */}
                <W.SingleInvoiceItemWrap area="items">
                    <W.ItemsWrapper>{itemsList(items)}</W.ItemsWrapper>
                    {/* Total Amount */}
                    <T.Text>Amount Due</T.Text>
                    <T.Text bold="true">${total}</T.Text>
                </W.SingleInvoiceItemWrap>
            </W.SingleInvoiceBodyWrap>
        </>
    );
};

export default InvoiceBody;
