"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";
import { Heading } from "../../atoms/Heading";
import { BusinessBtn } from "../../atoms/Button";
import PartBlock from "../../molecules/PartBlock";
import { data } from "../../../data";
import * as S from "./BusinessSection.style";

export type BusinessSection_props = {
  children?: any;
  className?: string | any;
  width?: string | number;
  background?: string | Object;
  mb?: Object | string;
  padding?: string | number;
  height?: string | number;
  gap?: string | number;
  contentStyle?: Object | any;
  partTitle?: string;
  partDescription?: string;
};

const BusinessSection = () => {
  const Router = useRouter();
  const onDetailBtnClick = (e: any) => {
    Router.push(`${e}`);
  };

  return (
    <S.BusinessSection>
      <S.BusinessBox className="business-tit-wrap">
        <Fade direction="up" triggerOnce>
          <Heading
            color="white"
            title="OUR BUSINESS"
            content="시각 디자인, 정보 디자인, 기술 디자인의 요소를 조합하여 급변하는 디지털 공간에서 상호간의 커뮤니케이션을 실현시키는 매개체를 설계 및 개발함으로써 사용자로 하여금 원하는 형태의 플랫폼을 통해 정확한 정보를 제공받을 수 있는 환경을 제공합니다."
          />
        </Fade>
      </S.BusinessBox>
      <Fade direction="up" triggerOnce>
        <S.BusinessContentBox className="row">
          {data.business.map((businessItem, idx) => {
            return (
              <PartBlock
                id={`businessItem-${businessItem.id}`}
                title={businessItem.part}
                subtitle={businessItem.sub}
                titleend={businessItem.part_end}
                icon={idx}
                description={businessItem.description}
                button={
                  <BusinessBtn
                    type="button"
                    onClick={() => onDetailBtnClick(`${businessItem.path}`)}
                    title="자세히보기"
                  />
                }
              />
            );
          })}
        </S.BusinessContentBox>
      </Fade>
    </S.BusinessSection>
  );
};

export default BusinessSection;
