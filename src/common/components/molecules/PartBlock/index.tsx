"use client";

import React from "react";
import { Icon } from "../../atoms/Icon/index";
import { BusinessBtn } from "../../atoms/Button";
import * as S from "./partBlock.style";

export type partblockProps = {
  id?: any;
  icon: any;
  title: any;
  subtitle?: string;
  titleend?: string;
  button: any;
  description: any;
};

const PartBlock = ({
  icon,
  title,
  subtitle,
  titleend,
  button,
  description,
}: partblockProps) => {
  return (
    <S.PartBlockBox>
      <Icon icon={icon} />
      <S.ContentWrapper className="content__wrapper">
        <S.ContentTitBox>
          {title}
          <span>{subtitle && subtitle}</span>
          {titleend && titleend}
        </S.ContentTitBox>
        <S.ContentTxtBox>{description}</S.ContentTxtBox>
      </S.ContentWrapper>
      {button}
    </S.PartBlockBox>
  );
};

export default PartBlock;
