"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { Heading } from "../../atoms/Heading";
import ListBlock from "../../molecules/ListBlock";
import { aboutPageData } from "../../../data";
import * as S from "./aboutPage.style";
import HistoryImg from "../../../../styles/assets/image/aboutus/about-history.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <S.AboutPage>
      <S.AboutPageSection position="top">
        <S.AboutPageBox>
          <Fade direction="up" triggerOnce>
            <Heading
              title={
                <div className="section-tit">
                  INSYSTEM은 <br />
                  <span>사람을 위한 가치</span>를 생각합니다.
                </div>
              }
              content={
                <>
                  세상을 더 편리하고 유용하게 만드는 IT기업으로써 행복의 가치를
                  추구하고 도전적이며 혁신적인 연구개발에 투자를 아끼지 않는
                  창의적인 기업이 되겠습니다.
                  <br />
                  꿈꾸는 사람들이 살아가는 곳, 꿈이 현실이 되는 곳, INSYSTEM과
                  함께 합니다.
                </>
              }
            />
          </Fade>
          <Fade direction="up" triggerOnce>
            <S.AboutPageList direction="column">
              {aboutPageData.about.map((item, idx) => (
                <ListBlock
                  key={idx}
                  name={item.title}
                  content_b={item.content_b}
                  content_h={item.content_h}
                  content_a={item.content_a}
                />
              ))}
            </S.AboutPageList>
          </Fade>
        </S.AboutPageBox>
      </S.AboutPageSection>

      <S.AboutPageSection position="middle">
        <Fade direction="up" triggerOnce>
          <S.AboutPageList direction="row">
            {aboutPageData.source.map((item, idx) => (
              <ListBlock
                key={idx}
                title={item.title}
                label={item.label}
                content={item.content}
                icon={
                  <Image
                    src={item.icons}
                    alt="회사소개 아이콘"
                    className="aboutus__icon"
                  />
                }
              />
            ))}
          </S.AboutPageList>
        </Fade>
      </S.AboutPageSection>
      <S.AboutPageSection position="bottom">
        <S.AboutPageBox>
          <Fade direction="up" triggerOnce>
            <Heading title="회사연혁" />
            <S.AboutHistoryImgBox>
              <Image src={HistoryImg} alt="회사연혁" layout="intrinsic" />
            </S.AboutHistoryImgBox>
          </Fade>
        </S.AboutPageBox>
      </S.AboutPageSection>
    </S.AboutPage>
  );
};

export default AboutPage;
