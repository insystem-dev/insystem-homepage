import React, { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import * as S from "./button.style";
import IconArrow from "../../../../styles/assets/svg/icon-arrow.svg";
import IconBack from "../../../../styles/assets/svg/icon-back.svg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactElement | any;
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: any;
  onClick?: any;
  color?: string;
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

export const PostBtn = ({ title, type, color, onClick }: ButtonProps) => {
  return (
    <S.PostBtn type={type} color={color} onClick={onClick}>
      {title}
    </S.PostBtn>
  );
};

export const InquiryBtn = ({ title, type, color, onClick }: ButtonProps) => {
  return (
    <S.InquiryBtn type={type} color={color} onClick={onClick}>
      {title}
    </S.InquiryBtn>
  );
};

export const BackBtn = () => {
  const Router = useRouter();

  return (
    <S.BackBtn type="button" onClick={() => Router.back()}>
      <IconBack />
      <span>돌아가기</span>
    </S.BackBtn>
  );
};

export const LoginBtn = ({ type }: ButtonProps) => {
  return <S.LoginBtn type={type}>로그인</S.LoginBtn>;
};
