'use client'

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import * as S from './aboutPage.style';
import { ContainerWrapper } from '../../molecules/Container/index';
import { AskText } from '../../atoms/Text';
import { Heading } from '../../atoms/Heading';
import ListBlock from '../../molecules/ListBlock';
import NextImage from '../../atoms/NextImage';
import { aboutPageData } from '../../../data';
import HistoryImg from '../../../assets/image/agency/aboutus/about-history.png';

const AboutPage = () => {
    return (
        <S.AboutPageWrapper>
            <ContainerWrapper>
                <S.AboutPageBox className="about-top">
                    <Fade direction='up'>
                        <div className="section-header">
                            INSYSTEM은 <br />
                            <span>사람을 위한 가치</span>를 생각합니다
                        </div>
                        <div className="section-header-divider" />
                        <AskText content="세상을 더 편리하고 유용하게 만드는 IT기업으로써 행복의 가치를 추구하고 도전적이며 혁신적인 연구개발에 투자를 아끼지 않는 창의적인 기업이 되겠습니다." />
                        <AskText content="꿈꾸는 사람들이 살아가는 곳, 꿈이 현실이 되는 곳, INSYSTEM과 함께 합니다." />
                    </Fade>
                    <Fade direction='up'>
                        <S.AboutPageBox className="row">
                            {aboutPageData.about.map((item, idx) => (
                                <ListBlock
                                    key={idx}
                                    name={item.title}
                                    content_b={item.content_b}
                                    content_h={item.content_h}
                                    content_a={item.content_a}
                                />
                            ))}
                        </S.AboutPageBox>
                    </Fade>
                </S.AboutPageBox>
            </ContainerWrapper>


            <S.AboutPageBox className="about-source">
                <Fade direction='up'>
                    <S.AboutPageBox className="row">
                        {aboutPageData.source.map((item, idx) => (
                            <ListBlock
                                key={idx}
                                title={item.title}
                                label={item.label}
                                content={item.content}
                                icon={<NextImage src={item.icons}
                                    alt="회사소개 아이콘"
                                    className="aboutus__icon" />}
                            />
                        ))}
                    </S.AboutPageBox>
                </Fade>
            </S.AboutPageBox>
            <ContainerWrapper>
                <S.AboutPageBox className="about-history">
                    <S.AboutPageBox className="section-header">
                        <Fade direction='up'>
                            <Heading content="회사연혁" />
                            <div className="section-header-divider" />
                        </Fade>
                    </S.AboutPageBox>
                    <br />
                    <S.AboutPageBox className="section-content">
                        <Fade direction='down' big={true}>
                            <NextImage src={HistoryImg} alt="회사연혁" />
                        </Fade>
                    </S.AboutPageBox>
                </S.AboutPageBox>
            </ContainerWrapper>
        </S.AboutPageWrapper>
    );
}

export default AboutPage;