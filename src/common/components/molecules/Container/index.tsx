'use client'

import React from 'react';
import * as S from './container.style';

export type  Container_props = {
    children?: any | Function
    className?: string | any
    content?: string | Object
    subcontent?: string | Object
    contentend?: string | Object 
    position?: string | Object
    top?: string | number
    width?: string | number
    background?: string | Object
    height?: string | number
    opacity?: number
    fontWeight?: string
    fontFamily?: string
    textAlign?: string
    borderRadius?: string
    color?: string
    featureTitle?: any
    featureDescription?: any
    blockWrapperStyle?: any
    fullWidth?: string | number | any
    noGutter?: any
    mobileGutter?: any
    variant?: string
    title?: string
    subTitle?: string
    pageTitle?: Object | any
    pagSubTitle?: Object | any
}

export const ContainerWrapper = ({
    children,
    className,
  }: Container_props) => {
    // Add all classs to an array
    const addAllClasses = ['container'];
    // className prop checking
    if (className) {
      addAllClasses.push(className);
    }
  
    return (
      <S.ContainerWrapper_style
        className= {addAllClasses.join(' ')}
      >
        {children}
      </S.ContainerWrapper_style>
    );
  };

export const NavbarContainer = ({
    children,
    className
}: Container_props) => {
    return (
        <S.NavbarContainer
            className={className}
        >
            {children}
        </S.NavbarContainer>
    )
}