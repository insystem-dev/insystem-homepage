'use client'

import React from 'react';
import * as S from './healthcare.style';

export type health_props = {
    className?: string | object
    children?: any
}

const HealthCarePage = ({
    children,
    className
}: health_props) => {
    return (
        <S.HealthCareWrapper
            className={className}
        >
            {children}
        </S.HealthCareWrapper>
    );
}

export default HealthCarePage;