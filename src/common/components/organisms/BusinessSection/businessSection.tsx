'use client'

import React, { Fragment } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import PartBlock from '../../molecules/PartBlock';
import { Heading } from '../../atoms/Heading';
import { AskText } from '../../atoms/Text';
import { ContainerWrapper } from '../../molecules/Container';
import * as S from './BusinessSection.style';
import { data } from '../../../data';

export type BusinessSection_props = {
    children?: any,
    className?: string | any,
    width?: string | number,
    background?: string | Object,
    mb?: Object | string,
    padding?: string | number,
    height?: string | number,
    gap?: string | number
    contentStyle?: Object | any
    partTitle?: string
    partDescription?: string
}


const BusinessSection = ({
    contentStyle,
}: BusinessSection_props) => {

    return (
        <S.BusinessSectionWrapper>
            <S.BusinessDetail_box className="business-tit-wrap">
                <Fade direction="up" className="fadeStyle">
                    <S.BusinessSection_box className="business-tit">
                        <Heading
                            color="white"
                            content="OUR BUSINESS"
                        />
                        <div className="section-header-divider" />
                        <AskText color="white " content="시각 디자인, 정보 디자인, 기술 디자인의 요소를 조합하여 급변하는 디지털 공간에서 상호간의 커뮤니케이션을 실현시키는 매개체를 설계 및 개발함으로써 사용자로 하여금 원하는 형태의 플랫폼을 통해 정확한 정보를 제공받을 수 있는 환경을 제공합니다." />
                    </S.BusinessSection_box>
                </Fade>
            </S.BusinessDetail_box>
            <ContainerWrapper>
                <Fade direction="up">
                    <S.BusinessDetail_box className="row">
                        {data.business.map((businessItem, idx) => {
                            return (
                                <S.BusinessDetail_box className="col" key={idx}>
                                    <PartBlock
                                        id={`businessItem-${businessItem.id}`}
                                        className="business__part"
                                        contentStyle={contentStyle}
                                        title={<Heading content={`${businessItem.part}`}
                                            subcontent={`${businessItem.sub}`}
                                            contentend={`${businessItem.part_end}`} />}
                                        icon={idx}
                                        description={
                                            <Fragment>
                                                <AskText content={businessItem.description} />
                                            </Fragment>
                                        }
                                        button={
                                            <Link href={businessItem.path} legacyBehavior>
                                                <a> 자세히보기 </a>
                                            </Link>
                                        }
                                    />
                                </S.BusinessDetail_box>
                            )
                        })}
                    </S.BusinessDetail_box>
                </Fade>
            </ContainerWrapper>
        </S.BusinessSectionWrapper>
    )
}

export default BusinessSection;