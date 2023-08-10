'use client'

import React from 'react';
import * as S from './image.style';

export type Image_props = {
  children?: any
  src: string
  alt: string | any
  className?: string | Object
  width?: string | number
  height?: string | number
}

const Image = ({ 
  src, 
  alt,
  width,
  height
}: Image_props) => (
  <S.Image_style src={src} alt={alt} width={width} height={height} />
);

export default Image;