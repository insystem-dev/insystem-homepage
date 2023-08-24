"use client";

import React, { useState } from "react";
import Logo from "../../atoms/Logo";
import * as S from "./footer.style";
import LogoImage from "../../../../styles/assets/image/logo.png";
import { FooterBtn } from "../../atoms/Button";

const Footer = () => {
  const [openUse, setOpenUse] = useState(false);
  const [openPrivate, setOpenPrivate] = useState(false);

  const openModalUse = () => {
    setOpenUse(true);
  };

  const openModalPrivate = () => {
    setOpenPrivate(true);
  };

  return (
    <S.Footer>
      <S.FooterBox>
        <Logo
          href="/"
          logoSrc={LogoImage}
          title="(주)인시스템 로고"
          width="footerLogo"
        />
        <S.FooterInfoBox>
          <S.FooterBtnBox>
            <FooterBtn type="button" onClick={openModalUse} title="이용약관" />
            <FooterBtn
              type="button"
              onClick={openModalPrivate}
              title="개인정보 처리방침"
            />
          </S.FooterBtnBox>
          <S.FooterInfoList>
            <S.FooterInfoItem>
              (주)인시스템 대표자&nbsp;&nbsp;이근익
            </S.FooterInfoItem>
            <S.FooterInfoItem>
              주소&nbsp;&nbsp;부산광역시 부산진구 범일로 176(범천동,
              부산범일로얄펠리스 2차) 4층 408호, 인시스템
            </S.FooterInfoItem>
            <S.FooterInfoItem>
              사업자등록번호&nbsp;&nbsp;536-86-00366
            </S.FooterInfoItem>
            <S.FooterInfoItem>
              법인등록번호&nbsp;&nbsp;194211-0253914
            </S.FooterInfoItem>
            <S.FooterInfoItem>
              대표전화&nbsp;&nbsp;051-714-6120
            </S.FooterInfoItem>
            <S.FooterInfoItem>FAX&nbsp;&nbsp;051-714-6121</S.FooterInfoItem>
          </S.FooterInfoList>
          <S.FooterCopy>
            Copyright ⓒ INSYSTEM. All Rights Reserved.
          </S.FooterCopy>
        </S.FooterInfoBox>
      </S.FooterBox>
    </S.Footer>
  );
};

export default Footer;
