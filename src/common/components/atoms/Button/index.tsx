import React, { Fragment, ButtonHTMLAttributes } from 'react';
import * as S from './button.style';

export interface Button_props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactElement | any
    type?: "button" | "submit" | "reset",
    title?: string,
    variant?: string,
    disabled?: any,
    value?: any,
    onClick?: any,
    className?: string,
    color?: string,
    fontSize?: string,
    background?: string | object,
    border?: string
}

export const AskSection_btn = ({
  children,
  type,
  title,
  variant,
  onClick,
  color,
  fontSize,
  border,
  background
}: Button_props) => {
  return (
    <S.AskSection_btn_style
      type={type}
      onClick={onClick}
      variant = {variant}
      color = {color}
      fontSize= {fontSize}
      border = {border}
      background={background}
    >
      <>
        {children}
        {title}
      </>
    </S.AskSection_btn_style>
  );
};

export const BusinessBtn = ({
  className,
  children,
}: Button_props) => {
  return (
    <S.BusinessBtn_style 
      className = {className}>
      {children}
    </S.BusinessBtn_style>
  )
};

export const InquiryBtn = ({
  children,
  title,
  variant,
  type,
  color,
  background,
  border,
}: Button_props) => {
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
  )
}