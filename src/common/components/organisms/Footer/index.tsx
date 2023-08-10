'use client'

import React, { useState } from 'react';
import { ContainerWrapper } from '../../molecules/Container';
import { FooterText } from '../../atoms/Text';
import * as S from './footer.style';
import LogoImage from '../../../assets/image/agency/logo.png';
import Logo from '../../atoms/Logo';

type Footer_ty = {
    row?: any,
    col?: any,
    logoStyle?: any,
    copyRight?: any
}


const Footer = ({
    row,
    col,
    logoStyle,
    copyRight
}: Footer_ty) => {
    const [openUse, setOpenUse] = useState(false);
    const [openPrivate, setOpenPrivate] = useState(false);

    const openModalUse = () => {
        setOpenUse(true)
    }

    const openModalPrivate = () => {
        setOpenPrivate(true)
    }

    return (
        <S.FooterWrapper>
            <ContainerWrapper>
                <S.FooterBox className="col">
                    <S.FooterBox className='colOne'>
                        <Logo href="#" logoSrc={LogoImage} title="(주)인시스템 로고" width="footerLogo" />
                    </S.FooterBox>
                </S.FooterBox>
                {/* End of footer logo column */}
                <S.FooterBox className="col">
                    <S.FooterBox>
                        <button onClick={openModalUse}>
                            <span>이용약관</span>
                        </button>
                        <button onClick={openModalPrivate}>
                            <span>개인정보 처리방침</span>
                        </button>
                    </S.FooterBox>
                    <S.FooterBox className="row">
                        <S.List>
                            <S.ListItem>
                                (주)인시스템 대표자 이근익
                            </S.ListItem>
                            <S.ListItem>
                                주소 부산광역시 부산진구 황령대로 24, 304호(범천동, 부산상공회의소)
                            </S.ListItem>
                            <S.ListItem>
                                사업자등록번호 536-86-00366
                            </S.ListItem>
                            <S.ListItem>
                                법인등록번호 194211-0253914
                            </S.ListItem>
                            <S.ListItem>
                                대표전화 051-714-6120
                            </S.ListItem>
                            <S.ListItem>
                                FAX 051-714-6121
                            </S.ListItem>
                        </S.List>
                    </S.FooterBox>
                    <FooterText content="Copyright ⓒ INSYSTEM. All Rights Reserved." />
                </S.FooterBox>
            </ContainerWrapper>
        </S.FooterWrapper>
    );
};

export default Footer;