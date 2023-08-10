'use client'

import React from 'react';
import { AboutHeading_style, Heading_style } from './heading.style';

export type Heading_ty = {
  children?: any
  content?: string,
  subcontent?: any,
  contentend?: any
  fontFamily?: string
  fontWeight?: string
  textAlign?: string
  color?: string
  fontSize?: string | number
}

export const Heading = ({ 
  content, 
  subcontent, 
  contentend,
  color
}: Heading_ty) => (
  <Heading_style color={color}>
    {content}<span>{subcontent}</span> {contentend} 
  </Heading_style>
);

export const AboutHeading = ({
  children,
  color,
  content,
  subcontent,
  contentend,
  textAlign,
  fontSize
}: Heading_ty) => {
  return (
    <AboutHeading_style 
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
    >
      {content}<span>{subcontent}</span>{contentend}
    </AboutHeading_style>
  )
}