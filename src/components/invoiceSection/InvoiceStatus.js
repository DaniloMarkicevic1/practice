import * as W from '../../styled/wrappers.styled';
import * as T from '../../styled/text.styled';

const InvoiceStatus = ({ status }) => {
    return (
        <W.StatusWrap>
            <T.StatusCircle status={status} />

            <T.Text area="status" status={status}>
                {status}
            </T.Text>
        </W.StatusWrap>
    );
};

export default InvoiceStatus;
