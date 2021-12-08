import { ArrowLeft } from '../../Images';

import { GoBackStyled } from '../../styled/button.styled';
import { GoBackWrapper } from '../../styled/wrappers.styled';

const GoBackBtn = ({ fn }) => {
    return (
        <GoBackWrapper form="true" onClick={fn}>
            <ArrowLeft />
            <GoBackStyled>Go Back</GoBackStyled>
        </GoBackWrapper>
    );
};

export default GoBackBtn;
