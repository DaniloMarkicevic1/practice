import { useContext } from 'react';
import { useNavigate } from 'react-router';

import Context from '../../context/context';

import InvoicesHeader from './InvoiceHeader/InvoicesHeader';

import { EmptyInvoices } from '../../Images';

import * as W from '../../styled/wrappers.styled';
import * as T from '../../styled/text.styled';

const InvoiceList = () => {
    const { data, getInvoice } = useContext(Context);
    const navigate = useNavigate();

    function mapEntries(objectData) {
        return (
            <>
                <T.Text area="id">
                    <span>#</span>
                    {objectData.id}
                </T.Text>

                <T.Text area="name">{objectData.clientName}</T.Text>

                <W.StatusWrap>
                    <T.StatusCircle status={objectData.status} />

                    <T.Text area="status" status={objectData.status}>
                        {objectData.status}
                    </T.Text>
                </W.StatusWrap>

                <T.Text area="date">{objectData.createdAt}</T.Text>

                <T.Text area="total">${objectData.total.toFixed(2)}</T.Text>
            </>
        );
    }

    function RenderList() {
        if (data.length < 1) {
            return <W.Img src={EmptyInvoices} alt="123" />;
        }
        return data.map((card, i) => {
            return (
                <W.Wrapper
                    key={card.id}
                    onClick={() => {
                        getInvoice(card.id);
                        navigate('/card');
                    }}
                >
                    {mapEntries(card)}
                </W.Wrapper>
            );
        });
    }

    return (
        <>
            <InvoicesHeader numberOfInvoices={data.length} />

            {RenderList()}
        </>
    );
};

export default InvoiceList;
