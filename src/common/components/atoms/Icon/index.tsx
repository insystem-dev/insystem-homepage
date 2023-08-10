'use client'

import React from 'react';
import * as S from './icon.style';
import * as I from '../../../data';
import NextImage from 'next/image';

export type Icon_ty = {
    icon?: any
    iconPosition?: string
}


export const Icon = ({
    icon,
}: Icon_ty) => {
    return (
        <S.BusinessIcon_style>
        <NextImage 
            src={I.data.business[icon].part_icon}
            alt="사업 서비스 분야 이미지" />
        </S.BusinessIcon_style>
    );
};