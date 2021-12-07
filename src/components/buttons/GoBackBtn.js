import { ArrowLeft } from '../../Images';

const GoBackBtn = ({ fn }) => {
    return (
        <div onClick={fn}>
            <ArrowLeft />
            <button>Go Back</button>
        </div>
    );
};

export default GoBackBtn;
