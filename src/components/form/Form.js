import reactDom from 'react-dom';
import { useContext } from 'react';

import { FormContext } from '../../context/form-context';

import GoBackBtn from '../buttons/GoBackBtn';
import FormBody from './FormBody';

import { FormWrapper } from '../../styled/wrappers.styled';

const FormPortal = ({ text }) => {
    const { toggleForm, setToggleForm } = useContext(FormContext);
    return (
        <>
            <FormWrapper>
                <GoBackBtn fn={() => setToggleForm(!toggleForm)} />
                <FormBody formType={text} />
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
