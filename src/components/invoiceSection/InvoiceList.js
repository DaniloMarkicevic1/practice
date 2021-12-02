import { useContext } from 'react';
import Context from '../../context/context';

const InvoiceList = () => {
    const { data } = useContext(Context);

    function mapEntries(objectData) {
        return Object.entries(objectData).map(([key, value]) => {
            return <p>{key}</p>;
        });
    }

    return (
        <>
            <div>
                {data.map((card, i) => {
                    return <div>{mapEntries(card)}</div>;
                })}
            </div>
        </>
    );
};

export default InvoiceList;
