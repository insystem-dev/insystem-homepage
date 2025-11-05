"use client";

import React, { useState } from "react";
import Logo from "../../atoms/Logo";
import { FooterBtn } from "../../atoms/Button";
import * as S from "./footer.style";
import LogoImage from "../../../../styles/assets/image/logo.png";
import Modal from "../../atoms/Modal";
import { Terms } from "../../atoms/Modal/Terms";

const Footer = () => {
  const [openUse, setOpenUse] = useState(false);
  const [openPrivate, setOpenPrivate] = useState(false);

  const handleModalUse = () => {
    setOpenUse(!openUse);
  };

  const handleModalPrivate = () => {
    setOpenPrivate(!openPrivate);
  };

  return (
    <>
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
              <FooterBtn
                type="button"
                onClick={handleModalUse}
                title="이용약관"
              />
              <FooterBtn
                type="button"
                onClick={handleModalPrivate}
                title="개인정보 처리방침"
              />
            </S.FooterBtnBox>
            <S.FooterInfoList>
              <S.FooterInfoItem>
                (주)인시스템 대표자&nbsp;&nbsp;이근익
              </S.FooterInfoItem>
              <S.FooterInfoItem>
                주소&nbsp;&nbsp;부산광역시 동구 조방로 22, 8층 803호 (범일동,
                파크빌딩)
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
      {openUse && (
        <Modal
          open={openUse}
          onClose={handleModalUse}
          title="홈페이지 이용약관"
          content={<Terms termType="homepageUse" />}
        />
      )}
      {openPrivate && (
        <Modal
          open={openPrivate}
          onClose={handleModalPrivate}
          title="개인정보 처리방침"
          content={<Terms termType="private" />}
        />
      )}
    </>
  );
};

export default Footer;
