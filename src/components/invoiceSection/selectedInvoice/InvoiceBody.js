import { useContext } from 'react';
import Context from '../../../context/context';

const InvoiceBody = (params) => {
    const { invoice } = useContext(Context);

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
    return <></>;
};

export default InvoiceBody;
