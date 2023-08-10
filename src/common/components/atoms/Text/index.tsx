'use client'

import React, { TextareaHTMLAttributes } from 'react';
import * as S from './text.style';

export interface Text_props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fontFamily?: string | number,
  fontWeight?: string | number,
  textAlign?: string | number,
  lineHeight?: string | number,
  letterSpacing?: string | number,
  content?: string,
  mt?: string | number,
  mb?: string | number,
  children?: any,
  color?: string,
  fontSize?: string | number,
  subcontent?: string | any,
  contentend?: string | any,
}

export const AskTitle = ({
  content,
  children,
  color,
}: Text_props) => (
  <S.AskTitle_style 
    color = {color}
  >
    {content}
    {children ? children : ""}
  </S.AskTitle_style>
);

export const AskTel = ({
  content,
  children,
  color,
}: Text_props) => (
  <S.AskTell_style
    color = {color}
  >
    {content}
    {children ? children : ""}
  </S.AskTell_style>
);

export const AskText = ({
  content,
  children,
  color
}: Text_props) => (
  <S.AskText_style
    color={color}
  >
    {content}
    {children ? children : ""}
  </S.AskText_style>
);

export const AboutText = ({
  content,
  children
}: Text_props) => (
  <S.AboutText_style>
    {content}
    {children ? children : ""}
  </S.AboutText_style>
);

export const FooterText = ({
  content,
  children
}: Text_props) => {
  return (
    <S.FooterText>
      {content}
      {children}
    </S.FooterText>
  )
};

export const HeadText = ({
  children,
  content,
  color,
}: Text_props) => {
  return (
    <S.HeadText_style
      color={color}
    >
      {content}
      {children}
    </S.HeadText_style>
  )
};

export const InquiryText = ({
  children,
  content,
  color,
  className
}: Text_props) => {
  return (
    <S.InquiryText_style
      className={className}
    >
      {children}
      {content}
    </S.InquiryText_style>
  )
};

export const LogoText = ({
  children,
  content
}: Text_props) => {
  return (
    <S.LogoText_style>
      {children}
      {content}
    </S.LogoText_style>
  )
};