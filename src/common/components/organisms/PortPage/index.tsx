'use client'

import React from 'react';
import * as S from './port.style';
import { ContainerWrapper } from '../../molecules/Container'; 

export type port_props = {
    className?: string | object
    children?: any
}

const PortPage = () => {
    return (
        <S.PortWrapper>
            <S.PortSection_2>
                <ContainerWrapper className='section-two'>
                    <S.PortHead> 항만 물류 운송관리 시스템 </S.PortHead>
                    <div className='section-header-divider-two' />
                    <S.PortTextBox>
                        <S.PortContext> 건강 토큰 서비스는 스마트 디바이스(스마트 워치, 스마트 슈즈 등)를 활용한 </S.PortContext>
                        <S.PortContext> 디지털 헬스케어 플랫폼으로, 디바이스를 통해 수집된 건강활동량을 </S.PortContext>
                        <S.PortContextBox className='section-two-text'>
                            <S.PortContext> 건강토큰으로 변환하여 제공하는 &nbsp; </S.PortContext>
                            <S.PortPointContext> 블록체인 기반의 리워드 시스템 </S.PortPointContext>
                            <S.PortContext className='second-text'> 입니다. </S.PortContext>
                        </S.PortContextBox>
                    </S.PortTextBox>
                    <S.PortTextBox className='sectionTwo'>
                        <S.PortContext> 특정 데이터제공 시 별도의 추가 인센티브 보상을 제공하는 등의 활용을 통해 </S.PortContext>
                        <S.PortContext> 건강활동 데이터베이스 구축에 유리한 환경을 제공합니다. </S.PortContext>
                    </S.PortTextBox>
                </ContainerWrapper>
            </S.PortSection_2>
            <S.PortDivider_2>
                <ContainerWrapper className='row'>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Report </S.PortPointContext>
                        <S.PortContext className='point'> 개인맞춤형 분석 제공 </S.PortContext>
                        <S.PortContext> 스마트 슈즈를 활용한 활동정보 및 </S.PortContext>
                        <S.PortContext> 건강활동량 데이터 수집 및 관리 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord' > Platform </S.PortPointContext>
                        <S.PortContext className='point'> 개인건강관리 플랫폼 </S.PortContext>
                        <S.PortContext> 신체 활동 정보에 기반한 개인건강관리 </S.PortContext>
                        <S.PortContext> 서비스 제공 및 리워드 시스템 구축 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Personal </S.PortPointContext>
                        <S.PortContext className='point'> 건강 모니터링 </S.PortContext>
                        <S.PortContext> 수집된 데이터는 건강토큰 어플리케이션과 </S.PortContext>
                        <S.PortContext>  연동되어 사용자가 언제든 모니터링하고 활용 가능 </S.PortContext>
                    </S.PortContent>
                </ContainerWrapper>
                <ContainerWrapper className='row-two'>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Reword </S.PortPointContext>
                        <S.PortContext className='point'> 건강활동 동기강화 </S.PortContext>
                        <S.PortContext> 리워드와 함께 건강활동을 촉진할 수 있는 </S.PortContext>
                        <S.PortContext> 동기부여 메세지 전달 등 동기강화 시스템 도입 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord' > Business </S.PortPointContext>
                        <S.PortContext className='point'> 새로운 수익모델 </S.PortContext>
                        <S.PortContext> 기업제휴를 통해 건강토큰 거래 등 활용처의 </S.PortContext>
                        <S.PortContext> 다양화를 통한 부차적인 수익모델 창출 가능 </S.PortContext>
                    </S.PortContent>
                </ContainerWrapper>
            </S.PortDivider_2>
            <S.PortSection_1>
                <ContainerWrapper>
                    <S.PortHead> 개인 맞춤형 당뇨병 예방・관리 플랫폼 </S.PortHead>
                    <ContainerWrapper className='section-header-divider' />
                    <S.PortTextBox>
                        <S.PortContext> 개인 맞춤형 당뇨병 예방・관리 플랫폼은 연속혈당 분석을 통해 개인별 당뇨병 원인을 파악하고, </S.PortContext>
                        <S.PortContextBox className='row'>
                            <S.PortPointContext> 결과 리포트 형식의 개인 맞춤형 처방 </S.PortPointContext>
                            <S.PortContext className='second-text'>을 통해 치료 중심에서 예방중심으로 변화하고 있는</S.PortContext>
                        </S.PortContextBox>
                        <S.PortContext> 보건의료 패러다임에 부합하는 당뇨 분야의 디지털 헬스케어 서비스입니다. </S.PortContext>
                    </S.PortTextBox>
                    <S.PortTextBox>
                        <S.PortContext> 데이터 수집 및 관리 등을 위한 웹 플랫폼과 함께 일상생활 속에서 </S.PortContext>
                        <S.PortContext> 손쉽게 혈당관리를 위한 사용자용 어플리케이션 플랫폼을 </S.PortContext>
                        <S.PortContext> 별도로 구축하여 사용자 편의성을 확보하였습니다. </S.PortContext>
                    </S.PortTextBox>
                </ContainerWrapper>
            </S.PortSection_1>
            <S.PortDivider>
                <ContainerWrapper className='row'>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Report </S.PortPointContext>
                        <S.PortContext className='point'> 개인맞춤형 분석 제공 </S.PortContext>
                        <S.PortContext> 임상정보/식이패턴/혈당모델링/연속혈당 기반 </S.PortContext>
                        <S.PortContext> 당뇨병 예측 결과 리포트 제공 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord' > Platform </S.PortPointContext>
                        <S.PortContext className='point'> 빅데이터 플랫폼 </S.PortContext>
                        <S.PortContext> 수집된 건강데이터를 통한 만성질환 관련 </S.PortContext>
                        <S.PortContext> 건강 빅데이터 플랫폼 구축의 기반 마련 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Prevention </S.PortPointContext>
                        <S.PortContext className='point'> 사전예방 솔루션 </S.PortContext>
                        <S.PortContext> 당뇨병의 조기발견 및 발병위험 안내를 통한 </S.PortContext>
                        <S.PortContext> 건강이상 사전예방 가능 </S.PortContext>
                    </S.PortContent>
                </ContainerWrapper>
            </S.PortDivider>
        </S.PortWrapper>
    );
}

export default PortPage;