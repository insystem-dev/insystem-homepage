"use client";

import React, { TextareaHTMLAttributes } from "react";
import * as S from "./text.style";

export interface Text_props
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fontFamily?: string | number;
  fontWeight?: string | number;
  textAlign?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  content?: string;
  mt?: string | number;
  mb?: string | number;
  children?: any;
  color?: string;
  fontSize?: string | number;
  subcontent?: string | any;
  contentend?: string | any;
}

export const HeadText = ({ children, content, color }: Text_props) => {
  return (
    <S.HeadText_style color={color}>
      {content}
      {children}
    </S.HeadText_style>
  );
};

export const InquiryText = ({
  children,
  content,
  color,
  className,
}: Text_props) => {
  return (
    <S.InquiryText_style className={className}>
      {children}
      {content}
    </S.InquiryText_style>
  );
};

export const LogoText = ({ children, content }: Text_props) => {
  return (
    <S.LogoText_style>
      {children}
      {content}
    </S.LogoText_style>
  );
};

export const ServiceText = ({
  children,
  content,
  color,
  fontWeight,
  className,
}: Text_props) => {
  console.log(fontWeight);

  return (
    <S.ServiceText_style
      color={color}
      fontWeight={fontWeight}
      className={className}
    >
      {children}
      {content}
    </S.ServiceText_style>
  );
};
