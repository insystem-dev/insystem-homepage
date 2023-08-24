import React from "react";
import Link from "next/link";
import * as S from "./featureBlock.style";

export type FeatureBlockProps = {
  areas?: string;
  icon?: any;
  title?: Element | any;
  description?: Element | Object;
  link?: any;
};

const FeatureBlock = ({
  areas,
  icon,
  title,
  description,
  link,
}: FeatureBlockProps) => {
  return (
    <S.FeatureBox areas={areas}>
      {link !== undefined && (
        <Link href={link} legacyBehavior>
          <S.FeatureContentBox>
            <S.ContentTitBox>{title}</S.ContentTitBox>
            <S.ContentDivider />
            <S.ContentTxtBox>
              <>{description}</>
            </S.ContentTxtBox>
            <S.ContentArrows>{icon}</S.ContentArrows>
          </S.FeatureContentBox>
        </Link>
      )}
      {link === undefined && <S.FeatureContentBox />}
    </S.FeatureBox>
  );
};

export default FeatureBlock;
