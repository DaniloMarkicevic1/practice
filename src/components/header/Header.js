import { AvatarImg, LightThemeImg, LogoImg } from '../../Images';

import * as S from '../../styled/header.styled';

function Header() {
    return (
        <>
            <S.Header>
                <S.Logo src={LogoImg} alt="asd" />
                <S.Div>
                    <LightThemeImg />
                    <S.Avatar src={AvatarImg} alt="bts" />
                </S.Div>
            </S.Header>
        </>
    );
}

export default Header;
