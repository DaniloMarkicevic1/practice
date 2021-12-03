import { ArrowDown, PlusIcon } from '../../../Images';

import Button from '../../buttons/Button';

import * as T from '../../../styled/text.styled';
import * as W from '../../../styled/wrappers.styled';

const InvoicesHeader = ({ numberOfInvoices }) => {
    return (
        <W.InvoiceHeaderWrapper wrapAll="wrapAll">
            <W.InvoiceHeaderItemWrap direction="column">
                <T.Text bold>Invoices</T.Text>
                <T.Text>{numberOfInvoices} of invoices</T.Text>
            </W.InvoiceHeaderItemWrap>

            <W.InvoiceHeaderItemWrap direction="row">
                <W.InvoiceHeaderItemWrap direction="row" filter="true">
                    <T.Text bold>Filter</T.Text>
                    <ArrowDown className="arrowDown" />
                </W.InvoiceHeaderItemWrap>

                <W.InvoiceHeaderItemWrap direction="row">
                    <PlusIcon className="plusIcon" />

                    <Button
                        text="New"
                        type="new"
                        fn={() => console.log('123')}
                    ></Button>
                </W.InvoiceHeaderItemWrap>
            </W.InvoiceHeaderItemWrap>
        </W.InvoiceHeaderWrapper>
    );
};

export default InvoicesHeader;
