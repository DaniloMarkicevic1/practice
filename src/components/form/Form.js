import { FormWrapper } from '../../styled/wrappers.styled';
import GoBackBtn from '../buttons/GoBackBtn';
import FormBody from './FormBody';

const Form = (props) => {
    return (
        <>
            <GoBackBtn />
            <FormWrapper>
                <FormBody />
            </FormWrapper>
        </>
    );
};

export default Form;
