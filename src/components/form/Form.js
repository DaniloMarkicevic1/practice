import reactDom from 'react-dom';
import { FormWrapper } from '../../styled/wrappers.styled';
import GoBackBtn from '../buttons/GoBackBtn';
import FormBody from './FormBody';
import Context from '../../context/context';

import { useContext } from 'react';

const FormPortal = ({ text }) => {
    const { toggleForm, setToggleForm } = useContext(Context);
    return (
        <>
            <FormWrapper>
                <GoBackBtn fn={() => setToggleForm(!toggleForm)} />
                <p>{text}</p>
                <FormBody />
            </FormWrapper>
        </>
    );
};

const Form = ({ text }) => {
    return reactDom.createPortal(
        <FormPortal text={text} />,
        document.querySelector('#form-root')
    );
};

export default Form;
