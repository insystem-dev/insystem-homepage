import React from 'react';
import { AboutHeading } from '../../atoms/Heading';
import { HeadText } from '../../atoms/Text';
import { ContainerWrapper } from '../../molecules/Container/index';
import * as S from './PageHeader.style';

export type pageHeader_props = {
    variant?: string,
    title?: string,
    subTitle?: string,
    color?: string,
    fontSize?: string | number
    className?: string
}

export const PageHeader = ({
    variant,
    title,
    subTitle,
    color,
    fontSize
}: pageHeader_props) => {
    return (
        <S.PageHeaderWrapper variant={variant}>
            <ContainerWrapper>
                <AboutHeading content={title} color="white"
                    fontSize="pageTitle"
                />
                <div className="page-title-divider" />
                <HeadText content={subTitle} />
            </ContainerWrapper>
        </S.PageHeaderWrapper>
    );
};