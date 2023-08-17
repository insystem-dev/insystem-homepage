'use client'

import React from 'react';
import * as S from './port.style';
import { ContainerWrapper } from '../../molecules/Container'; 
import { ServiceText } from '../../atoms/Text';

export type port_props = {
    className?: string | object
    children?: any
}

const PortPage = () => {
    return (
        <S.PortWrapper>
            <S.PortSection_2>
                <ContainerWrapper className='section-two'>
                    <ServiceText content='항만 물류 운송관리시스템' className='head' />
                    <div className='section-header-divider-two' />
                    <S.PortBox className='leftBox'>
                        <S.PortTextBox>
                            <S.PortContextBox className='section-two-text'>
                                <ServiceText content='항만 내 물류 운송의 업무 생산성 향상과 &nbsp;' />
                                <ServiceText content='물류의 디지털 트렌스포메이션(Digital Transformation)' color='primary' fontWeight='bold' />
                                <ServiceText content='을 통한' />
                            </S.PortContextBox>
                            <ServiceText content='운송 프로세스의 가시성 확보를 위한 항만간 물류 및 운송 프로세스 관리 솔루션입니다. 단순 배차관리 뿐만 아니라 셔틀의 수입/수출 단계 관리 및 정산관리 기능을 탑재하여 보다 세부적으로 분화된 단계에서의 관리가 가능합니다.' />
                        </S.PortTextBox>
                        <S.PortTextBox>
                            <ServiceText content='GPS기반 운송 이동경로 추적 및 기사별 운송단계의 실시간 파악이 가능한 기사용 어플리케이션을 개발 및 웹 플랫폼과 연동하여 물류 운송의 실시간 현황 파악의 편의성을 더욱 증대시켜' />
                            <S.PortContextBox className='section-two-text'>
                                <ServiceText content='하나의 플랫폼을 통한 &nbsp;' />
                                <ServiceText content='항만간 물류 운송 전단계 관리에 더욱 용이' color='primary' fontWeight='bold' />
                                <ServiceText content='한 시스템입니다.' />
                            </S.PortContextBox>
                        </S.PortTextBox>
                    </S.PortBox>
                </ContainerWrapper>
            </S.PortSection_2>
            <S.PortDivider>
                <ContainerWrapper className='row'>
                    <S.PortContent>
                        <ServiceText content='Evaluation' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='안정성 평가 실시' fontWeight='bold' className='point' />
                        <ServiceText content='시범 서비스 제공을 통한 사용자 피드백 적극 수렴 및 운송관리 시나리오에 따른 안정성 평가 실시' />
                    </S.PortContent>
                    <S.PortContent>
                        <ServiceText content='App Platform' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='실시간 운송 현황 관리' fontWeight='bold' className='point' />
                        <ServiceText content='APP 플랫폼을 활용한 기사 개인별 운송경로 추적기능과 관리자용 WEB 플랫폼 간 연동을 통한 실시간 운송 현황관리 서비스' />
                    </S.PortContent>
                    <S.PortContent>
                        <ServiceText content='Manage' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='물류운송 전단계 관리' fontWeight='bold' className='point' />
                        <ServiceText content='배차 및 기사지정 단계부터 정산까지 물류운송 전단계 관리 가능' />
                    </S.PortContent>
                </ContainerWrapper>
            </S.PortDivider>
            <S.PortSection_1>
                <ContainerWrapper>
                    <ServiceText content='검역관리 시스템' className='head' />
                    <div className='section-header-divider' />
                    <S.PortBox>
                        <S.PortTextBox>
                            <ServiceText content='검역관리 시스템은 기존 아날로그 방식으로 처리되었던 포워딩 업무의 프로그램 전산화를 통해 인력의 실수로 인한 오류를 감소시키고, 서면상으로 진행되는 세관업무 및 검역관리를 하나의 플랫폼에서 손쉽게 처리할 수 있도록 함으로써' />
                            <S.PortContextBox className='row'>
                                <ServiceText content='검역에 필요한 &nbsp;' />
                                <ServiceText content='데이터 및 서류 관리의 편의성 증대' color='primary' fontWeight='bold' />
                                <ServiceText content='를 위해 개발되었습니다.' className='second-text' />
                            </S.PortContextBox>
                        </S.PortTextBox>
                        <S.PortTextBox>
                            <ServiceText content='반응형 웹 플랫폼으로 제작되어 다양한 기기와 호환이 가능하며,' />
                            <S.PortContextBox>
                                <ServiceText content='추후 물류운송관리 시스템과의 연계를 통해' />
                                <ServiceText content='해외 포워딩 대행업무 및 검역 관련 통합 관리' color='primary' fontWeight='bold' />
                                <ServiceText content='가' />
                            </S.PortContextBox>
                            <ServiceText content='가능하도록 시스템의 기능 고도화 작업 예정입니다.' /> 
                        </S.PortTextBox>
                    </S.PortBox>
                </ContainerWrapper>
            </S.PortSection_1>
            <S.PortDivider>
                <ContainerWrapper className='row'>
                    <S.PortContent>
                        <ServiceText content='Manage' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='검역 서류 간편등록' fontWeight='bold' className='point' />
                        <ServiceText content='PDF 파일 내 텍스트 자동 감지를 통한 검역 서류 간편등록 관리' />
                    </S.PortContent>
                    <S.PortContent>
                        <ServiceText content='Digital' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='업무의 디지털화' fontWeight='bold' className='point' />
                        <ServiceText content='세관업무 및 검역관리 업무의 디지털화를 통한 필수 데이터 누락 최소화 및 효율적인 서류 및 데이터 관리 기능' />
                    </S.PortContent>
                    <S.PortContent>
                        <ServiceText content='platform' color='primary' fontWeight={600} className='pointWord' />
                        <ServiceText content='간편처리 플랫폼' fontWeight='bold' className='point' />
                        <ServiceText content='하나의 플랫폼을 통한 해외 포워딩 대행업무 및 세관업무 일괄 간편처리 기능' />
                    </S.PortContent>
                </ContainerWrapper>
            </S.PortDivider>
        </S.PortWrapper>
    );
}

export default PortPage;