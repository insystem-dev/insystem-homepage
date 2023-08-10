'use client'

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/navigation';
import { AskTitle, AskTel, AskText } from '../../atoms/Text';
import { AskSection_btn } from '../../atoms/Button/index';
import * as S from './askSection.style';


const AskSection = () => {
    const Router = useRouter();
    const onAskBoxBtnClick = () => {
        Router.push('/inquiry');
    }

    return (
        <S.AskSectionWrapper>
            <S.AskSection_section>
                <S.AskSectionBox
                    background="askBoxBg" >
                    <AskTitle
                    content="상담 및 견적문의"
                    color='white'
                    />
                    <AskTel 
                    content="051-714-6120"
                    color='white' />
                    <AskText
                        color='white'>
                        ※  문의페이지를 이용하시면 담당자 다이렉트 연결을 통해<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;더욱 빠른 상담 진행이 가능합니다.
                    </AskText>
                    <AskSection_btn
                        type="button"
                        title="문의하기"
                        color="white"
                        background="transparent"
                        border='white'
                        onClick={onAskBoxBtnClick} />
                </S.AskSectionBox>
            </S.AskSection_section>
        </S.AskSectionWrapper>
    )
}

export default AskSection;