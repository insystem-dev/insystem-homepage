'use client'

import React from 'react';
import * as S from './healthcare.style';
import { ContainerWrapper } from '../../molecules/Container/index';
import { ServiceText } from '../../atoms/Text';

export type HealthCareProps = {
    className: string;
}

export const HealthCarePage = () => {
    return (
        <S.HealthCareWrapper>
            <S.HealthCareSection_1>
                <ContainerWrapper>
                    <ServiceText content='개인 맞춤형 당뇨병 예방・관리 플랫폼' className='head' />
                    <div className='section-header-divider' />
                    <S.HealthCareBox>
                        <S.HealthCareTextBox>
                            <ServiceText content='개인 맞춤형 당뇨병 예방・관리 플랫폼은 연속혈당 분석을 통해 개인별 당뇨병 원인을 파악하고,' />
                            <S.HealthCareContextBox className='row'>
                                <ServiceText content='결과 리포트 형식의 개인 맞춤형 처방' color='primary' fontWeight='bold' />
                                <ServiceText content='을 통해 치료 중심에서 예방중심으로 변화하고 있는' className='second-text' />
                            </S.HealthCareContextBox>
                            <ServiceText content='보건의료 패러다임에 부합하는 당뇨 분야의 디지털 헬스케어 서비스입니다.' />
                        </S.HealthCareTextBox>
                        <S.HealthCareTextBox>
                            <ServiceText content='데이터 수집 및 관리 등을 위한 웹 플랫폼과 함께 일상생활 속에서 손쉽게 혈당관리를 위한 사용자용 어플리케이션 플랫폼을 별도로 구축하여 사용자 편의성을 확보하였습니다.' /> 
                        </S.HealthCareTextBox>
                    </S.HealthCareBox>
                </ContainerWrapper>
            </S.HealthCareSection_1>
            <S.HealthCareDivider>
                <ContainerWrapper className='row'>
                    <S.HealthCareContent>
                        <ServiceText content='Report' color='primary' fontWeight={600} className='pointWord' /> 
                        <ServiceText content='개인맞춤형 분석 제공' fontWeight='bold' className='point' /> 
                         <ServiceText content='임상정보/식이패턴/혈당모델링/연속혈당 기반 당뇨병 예측 결과 리포트 제공' />
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <ServiceText content='Platform' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='빅데이터 플랫폼' fontWeight='bold' className='point' />  
                         <ServiceText content='수집된 건강데이터를 통한 만성질환 관련 건강 빅데이터 플랫폼 구축의 기반 마련' />
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <ServiceText content='Prevention' color='primary' fontWeight={600} className='pointWord' /> 
                        <ServiceText content='사전예방 솔루션' fontWeight='bold' className='point' />   
                        <ServiceText content='당뇨병의 조기발견 및 발병위험 안내를 통한 건강이상 사전예방 가능' />
                    </S.HealthCareContent>
                </ContainerWrapper>
            </S.HealthCareDivider>
            <S.HealthCareSection_2>
                <ContainerWrapper className='section-two'>
                    <ServiceText content='블록체인 기반 건강 토큰 시스템' className='head' /> 
                    <div className='section-header-divider-two' />
                    <S.HealthCareBox className='leftBox'>
                        <S.HealthCareTextBox>
                            <ServiceText content='건강 토큰 서비스는 스마트 디바이스(스마트 워치, 스마트 슈즈 등)를 활용한 디지털 헬스케어 플랫폼으로, 디바이스를 통해 수집된 건강활동량을' /> 
                            <S.HealthCareContextBox className='section-two-text'>
                                <ServiceText content='건강토큰으로 변환하여 제공하는 &nbsp;' />   
                                <ServiceText content='블록체인 기반의 리워드 시스템' color='primary' fontWeight='bold' />
                                <ServiceText content='입니다.' className='second-text' />
                            </S.HealthCareContextBox>
                        </S.HealthCareTextBox>
                        <S.HealthCareTextBox className='sectionTwo'>
                            <ServiceText content='특정 데이터제공 시 별도의 추가 인센티브 보상을 제공하는 등의 활용을 통해 건강활동 데이터베이스 구축에 유리한 환경을 제공합니다.' />
                        </S.HealthCareTextBox>
                    </S.HealthCareBox>
                </ContainerWrapper>
            </S.HealthCareSection_2>
            <S.HealthCareDivider_2>
                <ContainerWrapper className='row'>
                    <S.HealthCareContent>
                        <ServiceText content='Report' color='primary' fontWeight={600} className='pointWord' />  
                        <ServiceText content='개인맞춤형 분석 제공' fontWeight='bold' className='point' />   
                        <ServiceText content='스마트 슈즈를 활용한 활동정보 및 건강활동량 데이터 수집 및 관리' />
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <ServiceText content='Platform' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='개인건강관리 플랫폼' fontWeight='bold' className='point' />   
                        <ServiceText content='신체 활동 정보에 기반한 개인건강관리 서비스 제공 및 리워드 시스템 구축' />
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <ServiceText content='Personal' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='건강 모니터링' fontWeight='bold' className='point' />   
                        <ServiceText content='수집된 데이터는 건강토큰 어플리케이션과 연동되어 사용자가 언제든 모니터링하고 활용 가능' />
                    </S.HealthCareContent>
                </ContainerWrapper>
                <ContainerWrapper className='row-two'>
                    <S.HealthCareContent>
                        <ServiceText content='Reword' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='건강활동 동기강화' fontWeight='bold' className='point' />   
                        <ServiceText content='리워드와 함께 건강활동을 촉진할 수 있는 동기부여 메세지 전달 등 동기강화 시스템 도입' />
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <ServiceText content='Business' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='새로운 수익모델' fontWeight='bold' className='point' />   
                        <ServiceText content='기업제휴를 통해 건강토큰 거래 등 활용처의 다양화를 통한 부차적인 수익모델 창출 가능' />
                    </S.HealthCareContent>
                </ContainerWrapper>
            </S.HealthCareDivider_2>
        </S.HealthCareWrapper>
    )
}

export default HealthCarePage;