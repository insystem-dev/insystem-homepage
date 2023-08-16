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
                        <S.PortContextBox className='section-two-text'>
                            <S.PortContext> 항만 내 물류 운송의 업무 생산성 향상과 &nbsp; </S.PortContext>
                            <S.PortPointContext> 물류의 디지털 트렌스포메이션(Digital Transformation) </S.PortPointContext>
                            <S.PortContext> 을 통한 </S.PortContext>
                        </S.PortContextBox>
                        <S.PortContext> 운송 프로세스의 가시성 확보를 위한 항만간 물류 및 운송 프로세스 관리 솔루션입니다. </S.PortContext>
                        <S.PortPointContext> 단순 배차관리 뿐만 아니라 셔틀의 수입/수출 단계 관리 및 정산관리 기능을 탑재하여 보다 </S.PortPointContext>
                        <S.PortContext className='second-text'> 세부적으로 분화된 단계에서의 관리가 가능합니다. </S.PortContext>
                    </S.PortTextBox>
                    <S.PortTextBox className='sectionTwo'>
                        <S.PortContext> GPS기반 운송 이동경로 추적 및 기사별 운송단계의 실시간 파악이 </S.PortContext>
                        <S.PortContext> 가능한 기사용 어플리케이션을 개발 및 웹 플랫폼과 연동하여 </S.PortContext>
                        <S.PortContext> 물류 운송의 실시간 현황 파악의 편의성을 더욱 증대시켜 </S.PortContext>
                        <S.PortContextBox className='section-two-text'>
                            <S.PortContext> 하나의 플랫폼을 통한 &nbsp; </S.PortContext>
                            <S.PortPointContext> 항만간 물류 운송 전단계 관리에 더욱 용이 </S.PortPointContext>
                            <S.PortContext> 한 시스템입니다. </S.PortContext>
                        </S.PortContextBox>
                    </S.PortTextBox>
                </ContainerWrapper>
            </S.PortSection_2>
            <S.PortDivider>
                <ContainerWrapper className='row'>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Evaluation </S.PortPointContext>
                        <S.PortContext className='point'> 안정성 평가 실시 </S.PortContext>
                        <S.PortContext> 시범 서비스 제공을 통한 </S.PortContext>
                        <S.PortContext> 사용자 피드백 적극 수렴 및 </S.PortContext>
                        <S.PortContext> 운송관리 시나리오에 따른 안정성 평가 실시 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord' > App Platform </S.PortPointContext>
                        <S.PortContext className='point'> 실시간 운송 현황 관리 </S.PortContext>
                        <S.PortContext> APP 플랫폼을 활용한 </S.PortContext>
                        <S.PortContext> 기사 개인별 운송경로 추적기능과 </S.PortContext>
                        <S.PortContext> 관리자용 WEB 플랫폼 간 연동을 통한 </S.PortContext>
                        <S.PortContext> 실시간 운송 현황관리 서비스 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Manage </S.PortPointContext>
                        <S.PortContext className='point'> 물류운송 전단계 관리 </S.PortContext>
                        <S.PortContext> 배차 및 기사지정 단계부터 </S.PortContext>
                        <S.PortContext>  정산까지 물류운송 전단계 관리 가능 </S.PortContext>
                    </S.PortContent>
                </ContainerWrapper>
            </S.PortDivider>
            <S.PortSection_1>
                <ContainerWrapper>
                    <S.PortHead> 검역관리 시스템 </S.PortHead>
                    <ContainerWrapper className='section-header-divider' />
                    <S.PortTextBox>
                        <S.PortContext> 검역관리 시스템은 기존 아날로그 방식으로 처리되었던 포워딩 업무의 프로그램 전산화를 통해 </S.PortContext>
                        <S.PortContext> 인력의 실수로 인한 오류를 감소시키고, 서면상으로 진행되는 세관업무 및 검역관리를 </S.PortContext>
                        <S.PortContext> 하나의 플랫폼에서 손쉽게 처리할 수 있도록 함으로써 </S.PortContext>
                        <S.PortContextBox className='row'>
                            <S.PortContext> 검역에 필요한 &nbsp; </S.PortContext>
                            <S.PortPointContext> 데이터 및 서류 관리의 편의성 증대 </S.PortPointContext>
                            <S.PortContext className='second-text'>를 위해 개발되었습니다.</S.PortContext>
                        </S.PortContextBox>
                    </S.PortTextBox>
                    <S.PortTextBox>
                        <S.PortContext> 반응형 웹 플랫폼으로 제작되어 다양한 기기와 호환이 가능하며, </S.PortContext>
                        <S.PortContextBox>
                            <S.PortContext> 추후 물류운송관리 시스템과의 연계를 통해 </S.PortContext>
                            <S.PortPointContext> 해외 포워딩 대행업무 및 검역 관련 통합 관리 </S.PortPointContext>
                            <S.PortContext> 가 </S.PortContext>
                        </S.PortContextBox>
                        <S.PortContext> 가능하도록 시스템의 기능 고도화 작업 예정입니다. </S.PortContext>
                    </S.PortTextBox>
                </ContainerWrapper>
            </S.PortSection_1>
            <S.PortDivider>
                <ContainerWrapper className='row'>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Manage </S.PortPointContext>
                        <S.PortContext className='point'> 검역 서류 간편등록 </S.PortContext>
                        <S.PortContext> PDF 파일 내 텍스트 자동 감지를 통한 </S.PortContext>
                        <S.PortContext> 검역 서류 간편등록 관리 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord' > Digital </S.PortPointContext>
                        <S.PortContext className='point'> 업무의 디지털화 </S.PortContext>
                        <S.PortContext> 세관업무 및 검역관리 업무의 디지털화를 통한 </S.PortContext>
                        <S.PortContext> 필수 데이터 누락 최소화, </S.PortContext>
                        <S.PortContext> 효율적인 서류 및 데이터 관리 기능 </S.PortContext>
                    </S.PortContent>
                    <S.PortContent>
                        <S.PortPointContext className='pointWord'> Flatform </S.PortPointContext>
                        <S.PortContext className='point'> 간편처리 플랫폼 </S.PortContext>
                        <S.PortContext> 하나의 플랫폼을 통한 해외 포워딩 </S.PortContext>
                        <S.PortContext> 대행업무 및 세관업무 </S.PortContext>
                        <S.PortContext> 일괄 간편처리 기능 </S.PortContext>
                    </S.PortContent>
                </ContainerWrapper>
            </S.PortDivider>
        </S.PortWrapper>
    );
}

export default PortPage;