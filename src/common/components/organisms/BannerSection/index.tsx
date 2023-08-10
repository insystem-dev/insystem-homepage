import React from 'react';
import * as S from './bannerSecion.style';
import { ContainerWrapper } from '../../molecules/Container';

export type  Banner_props = {
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
    fullWidth?: any
    noGutter?: any
    mobileGutter?: any
    variant?: string
    title?: string
    subTitle?: string
    pageTitle?: Object | any
    pagSubTitle?: Object | any
}

function BannerSection({
}: any): React.JSX.Element {
    return (
        <S.BannerWrapper>
            <ContainerWrapper>
                <div className="row"></div>
            </ContainerWrapper>
        </S.BannerWrapper>
    );
}


export default BannerSection;
