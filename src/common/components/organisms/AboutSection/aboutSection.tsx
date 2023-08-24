"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import { Heading } from "../../atoms/Heading";
import FeatureBlock from "../../atoms/FeatureBlock";
import { data } from "../../../data";
import * as S from "./AboutSection.style";

const AboutSection = () => {
  return (
    <S.AboutSection>
      <S.AboutBox>
        <Fade direction="up" triggerOnce>
          <Heading
            color="head"
            title="ABOUT INSYSTEM"
            content="(주)인시스템은 세상을 더 편리하고 유용하게 만들기 위해 고객의 가치와 생각을 분석하고, 다양한 전공 분야 및 경력을 가진 핵심인력을 바탕으로 혁신연구 개발에 투자를 아끼지 않는 Digital Platform 개발 전문기업입니다."
          />
          <S.AboutContentBox>
            {data.features.map((feature: any, idx: any) => (
              <FeatureBlock
                areas={feature.class}
                icon={<i className="flaticon-next" />}
                link={feature.path}
                key={idx}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </S.AboutContentBox>
        </Fade>
      </S.AboutBox>
    </S.AboutSection>
  );
};

export default AboutSection;
