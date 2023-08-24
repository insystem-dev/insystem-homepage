import React, { ButtonHTMLAttributes } from "react";
import * as S from "./button.style";
import IconArrow from "../../../../styles/assets/svg/icon-arrow.svg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement | any;
  type?: "button" | "submit" | "reset";
  title?: string;
  variant?: string;
  disabled?: any;
  value?: any;
  onClick?: any;
  className?: string;
  color?: string;
  fontSize?: string;
  background?: string | object;
  border?: string;
}

export const AskSectionBtn = ({
  children,
  type,
  title,
  onClick,
}: ButtonProps) => {
  return (
    <S.AskSectionBtn type={type} onClick={onClick}>
      <>
        {children}
        {title}
      </>
    </S.AskSectionBtn>
  );
};

export const BusinessBtn = ({ type, onClick, title }: ButtonProps) => {
  return (
    <S.BusinessBtn type={type} onClick={onClick}>
      {title}
    </S.BusinessBtn>
  );
};

export const NoticeBtn = ({ type, onClick }: ButtonProps) => {
  return (
    <S.NoticeBtn type={type} onClick={onClick}>
      <IconArrow width={34} height={34} viewBox="0 0 24 24" />
    </S.NoticeBtn>
  );
};

export const FooterBtn = ({ type, onClick, title }: ButtonProps) => {
  return (
    <S.FooterBtn type={type} onClick={onClick}>
      {title}
    </S.FooterBtn>
  );
};

export const InquiryBtn = ({
  children,
  title,
  variant,
  type,
  color,
  background,
  border,
}: ButtonProps) => {
  return (
    <S.inquiryBtn_style
      variant={variant}
      type={type}
      color={color}
      background={background}
      border={border}
    >
      {children}
      {title}
    </S.inquiryBtn_style>
  );
};
