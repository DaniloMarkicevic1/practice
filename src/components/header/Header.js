import { AvatarImg, LightThemeImg, LogoImg } from '../../Images';

import * as H from '../../styled/header.styled';

function Header() {
    return (
        <>
            <H.Header>
                <H.Logo src={LogoImg} alt="asd" />
                <H.Div>
                    <LightThemeImg />
                    <H.Line />
                    <H.Avatar src={AvatarImg} alt="bts" />
                </H.Div>
            </H.Header>
        </>
    );
}

export default Header;
