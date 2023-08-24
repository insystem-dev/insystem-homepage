import React from "react";
import { PageHeading } from "../../atoms/Heading";
import * as S from "./PageHeader.style";

export type pageHeaderProps = {
  variant?: string;
  title?: string;
  subTitle?: string;
};

export const PageHeader = ({ variant, title, subTitle }: pageHeaderProps) => {
  return (
    <S.PageHeaderWrapper variant={variant}>
      <PageHeading
        title={title}
        color="white"
        fontSize="pageTitle"
        content={subTitle}
      />
    </S.PageHeaderWrapper>
  );
};
