'use client'

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { AboutText } from '../../atoms/Text';
import * as S from './AboutSection.style';
import { ContainerWrapper } from '../../molecules/Container';
import { Heading } from '../../atoms/Heading';
import FeatureBlock from '../../atoms/FeatureBlock';
import { data } from '../../../data';

export type  AboutSection_props = {
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

const AboutSection = ({
    featureTitle,
    featureDescription,
    blockWrapperStyle,
}: AboutSection_props) => {
    return (
        <S.AboutSectionWrapper>
            <ContainerWrapper>
                <S.AboutSectionBox>
                    <Fade direction='up'>
                        <Heading
                            color="head"
                            content="ABOUT INSYSTEM"
                        />
                        <div className="section-header-divider" />
                        <AboutText content="(주)인시스템은 세상을 더 편리하고 유용하게 만들기 위해 고객의 가치와 생각을 분석하고, 다양한 전공 분야 및 경력을 가진 핵심인력을 바탕으로 혁신연구 개발에 투자를 아끼지 않는 Digital Platform 개발 전문기업입니다." />
                    </Fade>
                </S.AboutSectionBox>
                <Fade direction='up'>
                    <S.AboutSectionBox className="row">
                        {data.features.map((feature: any, idx: any) => (
                            <FeatureBlock
                                className={feature.class}
                                icon={<i className="flaticon-next" />}
                                wrapperStyle={blockWrapperStyle}
                                link={feature.path}
                                key={idx}
                                title={<Heading content={feature.title} />}
                                description={
                                    <AboutText content={feature.description} />
                                }
                            />
                        ))}
                    </S.AboutSectionBox>
                </Fade>
            </ContainerWrapper>
        </S.AboutSectionWrapper >
    );
};

export default AboutSection;