'use client'

import React from 'react';
import * as S from './port.style';

export type port_props = {
    className?: string | object
    children?: any
}

const PortPage = ({
    children,
    className
}: port_props) => {
    return (
        <S.PortWrapper
            className={className}
        >
            {children}
        </S.PortWrapper>
    );
}

export default PortPage;