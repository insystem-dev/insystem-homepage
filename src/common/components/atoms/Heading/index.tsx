"use client";

import React from "react";
import * as S from "./heading.style";

export type HeadingProps = {
  children?: any;
  title?: string | any;
  subcontent?: any;
  contentend?: any;
  fontFamily?: string;
  fontWeight?: string;
  textAlign?: string;
  color?: string;
  fontSize?: string | number;
  content?: string | any;
};

export const Heading = ({ title, color, content }: HeadingProps) => (
  <S.HeadingBox color={color}>
    {title}
    <S.HeadingDividerBox color={color} />
    <S.HeadingContentBox color={color}>{content}</S.HeadingContentBox>
  </S.HeadingBox>
);

export const PageHeading = ({
  color,
  title,
  content,
  textAlign,
  fontSize,
}: HeadingProps) => {
  return (
    <S.PageHeadingBox color={color} textAlign={textAlign} fontSize={fontSize}>
      {title}
      <S.PageHeadDividerBox />
      <S.PageHeadContBox>{content}</S.PageHeadContBox>
    </S.PageHeadingBox>
  );
};
