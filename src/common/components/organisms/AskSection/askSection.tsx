"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AskSectionBtn } from "../../atoms/Button/index";
import * as S from "./askSection.style";

const AskSection = () => {
  const Router = useRouter();
  const onAskBoxBtnClick = () => {
    Router.push("/inquiry");
  };

  return (
    <S.AskSection>
      <S.AskBox>
        <S.AskTit>상담 및 견적문의</S.AskTit>
        <S.AskTel>051-714-6120</S.AskTel>
        <S.AskTxt>
          ※ 문의페이지를 이용하시면 담당자 연결을 통해 더욱
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;빠른 상담 진행이 가능합니다.
        </S.AskTxt>
        <AskSectionBtn
          title="문의하기"
          type="button"
          onClick={onAskBoxBtnClick}
        />
      </S.AskBox>
    </S.AskSection>
  );
};

export default AskSection;
