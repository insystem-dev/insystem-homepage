'use client'

import React from 'react';
import * as S from './healthcare.style';
import { ContainerWrapper } from '../../molecules/Container/index';

export type HealthCareProps = {
    className: string;
}

export const HealthCarePage = () => {
    return (
        <S.HealthCareWrapper>
            <S.HealthCareSection_1>
                <ContainerWrapper>
                    <S.HealthcareHead> 개인 맞춤형 당뇨병 예방・관리 플랫폼 </S.HealthcareHead>
                    <ContainerWrapper className='section-header-divider' />
                    <S.HealthCareTextBox>
                        <S.HealthCareContext> 개인 맞춤형 당뇨병 예방・관리 플랫폼은 연속혈당 분석을 통해 개인별 당뇨병 원인을 파악하고, </S.HealthCareContext>
                        <S.HealthCareContextBox className='row'>
                            <S.HealthCarePointContext> 결과 리포트 형식의 개인 맞춤형 처방 </S.HealthCarePointContext>
                            <S.HealthCareContext className='second-text'>을 통해 치료 중심에서 예방중심으로 변화하고 있는</S.HealthCareContext>
                        </S.HealthCareContextBox>
                        <S.HealthCareContext> 보건의료 패러다임에 부합하는 당뇨 분야의 디지털 헬스케어 서비스입니다. </S.HealthCareContext>
                    </S.HealthCareTextBox>
                    <S.HealthCareTextBox>
                        <S.HealthCareContext> 데이터 수집 및 관리 등을 위한 웹 플랫폼과 함께 일상생활 속에서 </S.HealthCareContext>
                        <S.HealthCareContext> 손쉽게 혈당관리를 위한 사용자용 어플리케이션 플랫폼을 </S.HealthCareContext>
                        <S.HealthCareContext> 별도로 구축하여 사용자 편의성을 확보하였습니다. </S.HealthCareContext>
                    </S.HealthCareTextBox>
                </ContainerWrapper>
            </S.HealthCareSection_1>
            <S.HealthCareDivider>
                <ContainerWrapper className='row'>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord'> Report </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 개인맞춤형 분석 제공 </S.HealthCareContext>
                        <S.HealthCareContext> 임상정보/식이패턴/혈당모델링/연속혈당 기반 </S.HealthCareContext>
                        <S.HealthCareContext> 당뇨병 예측 결과 리포트 제공 </S.HealthCareContext>
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord' > Platform </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 빅데이터 플랫폼 </S.HealthCareContext>
                        <S.HealthCareContext> 수집된 건강데이터를 통한 만성질환 관련 </S.HealthCareContext>
                        <S.HealthCareContext> 건강 빅데이터 플랫폼 구축의 기반 마련 </S.HealthCareContext>
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord'> Prevention </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 사전예방 솔루션 </S.HealthCareContext>
                        <S.HealthCareContext> 당뇨병의 조기발견 및 발병위험 안내를 통한 </S.HealthCareContext>
                        <S.HealthCareContext> 건강이상 사전예방 가능 </S.HealthCareContext>
                    </S.HealthCareContent>
                </ContainerWrapper>
            </S.HealthCareDivider>
            <S.HealthCareSection_2>
                <ContainerWrapper className='section-two'>
                    <S.HealthcareHead> 블록체인 기반 건강 토큰 시스템 </S.HealthcareHead>
                    <div className='section-header-divider-two' />
                    <S.HealthCareTextBox>
                        <S.HealthCareContext> 건강 토큰 서비스는 스마트 디바이스(스마트 워치, 스마트 슈즈 등)를 활용한 </S.HealthCareContext>
                        <S.HealthCareContext> 디지털 헬스케어 플랫폼으로, 디바이스를 통해 수집된 건강활동량을 </S.HealthCareContext>
                        <S.HealthCareContextBox className='section-two-text'>
                            <S.HealthCareContext> 건강토큰으로 변환하여 제공하는 &nbsp; </S.HealthCareContext>
                            <S.HealthCarePointContext> 블록체인 기반의 리워드 시스템 </S.HealthCarePointContext>
                            <S.HealthCareContext className='second-text'> 입니다. </S.HealthCareContext>
                        </S.HealthCareContextBox>
                    </S.HealthCareTextBox>
                    <S.HealthCareTextBox className='sectionTwo'>
                        <S.HealthCareContext> 특정 데이터제공 시 별도의 추가 인센티브 보상을 제공하는 등의 활용을 통해 </S.HealthCareContext>
                        <S.HealthCareContext> 건강활동 데이터베이스 구축에 유리한 환경을 제공합니다. </S.HealthCareContext>
                    </S.HealthCareTextBox>
                </ContainerWrapper>
            </S.HealthCareSection_2>
            <S.HealthCareDivider_2>
                <ContainerWrapper className='row'>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord'> Report </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 개인맞춤형 분석 제공 </S.HealthCareContext>
                        <S.HealthCareContext> 스마트 슈즈를 활용한 활동정보 및 </S.HealthCareContext>
                        <S.HealthCareContext> 건강활동량 데이터 수집 및 관리 </S.HealthCareContext>
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord' > Platform </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 개인건강관리 플랫폼 </S.HealthCareContext>
                        <S.HealthCareContext> 신체 활동 정보에 기반한 개인건강관리 </S.HealthCareContext>
                        <S.HealthCareContext> 서비스 제공 및 리워드 시스템 구축 </S.HealthCareContext>
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord'> Personal </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 건강 모니터링 </S.HealthCareContext>
                        <S.HealthCareContext> 수집된 데이터는 건강토큰 어플리케이션과 </S.HealthCareContext>
                        <S.HealthCareContext>  연동되어 사용자가 언제든 모니터링하고 활용 가능 </S.HealthCareContext>
                    </S.HealthCareContent>
                </ContainerWrapper>
                <ContainerWrapper className='row-two'>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord'> Reword </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 건강활동 동기강화 </S.HealthCareContext>
                        <S.HealthCareContext> 리워드와 함께 건강활동을 촉진할 수 있는 </S.HealthCareContext>
                        <S.HealthCareContext> 동기부여 메세지 전달 등 동기강화 시스템 도입 </S.HealthCareContext>
                    </S.HealthCareContent>
                    <S.HealthCareContent>
                        <S.HealthCarePointContext className='pointWord' > Business </S.HealthCarePointContext>
                        <S.HealthCareContext className='point'> 새로운 수익모델 </S.HealthCareContext>
                        <S.HealthCareContext> 기업제휴를 통해 건강토큰 거래 등 활용처의 </S.HealthCareContext>
                        <S.HealthCareContext> 다양화를 통한 부차적인 수익모델 창출 가능 </S.HealthCareContext>
                    </S.HealthCareContent>
                </ContainerWrapper>
            </S.HealthCareDivider_2>
        </S.HealthCareWrapper>
    )
}

export default HealthCarePage;