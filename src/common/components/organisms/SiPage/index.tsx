'use client'

import React from 'react';
import * as S from './si.style';

export type si_props = {
    className?: string | object
    children?: any
}

const SiPage = ({
    children,
    className
}: si_props) => {
    return (
        <S.siWrapper
            className={className}
        >
            {children}
        </S.siWrapper>
    );
}

export default SiPage;