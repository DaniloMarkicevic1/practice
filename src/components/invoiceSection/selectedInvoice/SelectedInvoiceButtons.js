import Button from '../../buttons/Button';

const SelectedInvoiceButtons = () => {
    return (
        <>
            <Button type="edit" text="Edit"></Button>
            <Button type="delete" text="Delete"></Button>
            <Button type="mark" text="Mark as paid"></Button>
        </>
    );
};

export default SelectedInvoiceButtons;
