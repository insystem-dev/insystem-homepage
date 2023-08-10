import React, { Fragment } from 'react';
import FeatureBlockWrapper, {
  ContentWrapper,
} from './featureBlock.style';
import Link from 'next/link';

export type FeatureBlock_ty = {
  className: string,
  icon?: any,
  title?: Element | any,
  description?: Element | Object,
  wrapperStyle?: Object,
  iconStyle?: Object,
  contentStyle?: Object,
  btnWrapperStyle?: Object,
  link?: any
  bottom?: any
}

const FeatureBlock = ({
  className,
  icon,
  title,
  description,
  wrapperStyle,
  iconStyle,
  contentStyle,
  btnWrapperStyle,
  link,
  bottom,
  ...props
}: FeatureBlock_ty) => {
  // Add all classs to an array
  const addAllClasses = ['feature__block'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }


  return (
    <FeatureBlockWrapper
      className={addAllClasses.join(' ')}
      {...wrapperStyle}
      {...props}
    >
      {title || description || bottom || link ? (
        <Fragment>
          {link !== undefined &&
            <Link href={link} legacyBehavior>
              <ContentWrapper className="content__wrapper" {...contentStyle}>
                <span>{title}</span>
                <div className="content-divider" />
                {description}
                {icon}
              </ContentWrapper>
            </Link>
          }
          {link === undefined &&
            <ContentWrapper className="content__wrapper" {...contentStyle}>
              {title}
              <div className="content-divider" />
              {description}
              {icon}
            </ContentWrapper>
          }
        </Fragment>
      ) : (
        ''
      )}
    </FeatureBlockWrapper>
  );
};

export default FeatureBlock;
