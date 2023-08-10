'use client'

import React, { Fragment } from 'react';
import { Icon } from '../../atoms/Icon/index';
import {
  PartBlock_style,
  ContentWrapper,
} from './partBlock.style';
import { BusinessBtn } from '../../atoms/Button';

export type partblock_ty = {
  children?: any
  className: string,
  id?: any,
  icon: any,
  title: any,
  button: any,
  description: any,
  additionalContent?: any,
  wrapperStyle?: any,
  contentStyle: any,
  btnWrapperStyle?: any,
}


const PartBlock = ({
  children,
  className,
  icon,
  title,
  button,
  description,
  additionalContent,
  wrapperStyle,
  contentStyle,
  btnWrapperStyle,
  id,
  ...props
}: partblock_ty) => {
  // Add all classs to an array
  const addAllClasses = ['block__block'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <PartBlock_style
      className={addAllClasses.join(' ')}
      {...wrapperStyle}
    >
      {children}
      <Icon icon={icon}/>
      <Fragment>
        <ContentWrapper className="content__wrapper" {...contentStyle}>
          <span>{title}</span>
          {description}
        </ContentWrapper>
        {button && (
          <BusinessBtn className="button__wrapper" {...btnWrapperStyle}>
            {button}
          </BusinessBtn>
        )}
        {additionalContent}
      </Fragment>
    </PartBlock_style>
  );
};

export default PartBlock;
