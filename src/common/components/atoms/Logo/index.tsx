import React from 'react';
import * as T from '../Text/index';
import Link from '../Link';
import Image from '../Image';

type Logo_ty = {
    className?: string,
    logoWrapperStyle?: any,
    width?: string | number
    height?: string | number
    withAnchor?: boolean,
    anchorProps?: any,
    logoSrc?: any,
    title?: string,
    href?: string,
}

const Logo = ({
  className,
  withAnchor,
  anchorProps,
  logoSrc,
  title,
  href,
  width,
}: Logo_ty) => {
  return (
    <>
      {withAnchor ? (
        <Link legacyBehavior >
          <a {...anchorProps}>
            {logoSrc ? (
              <Image src={logoSrc.src} alt={title} width={width} />
            ) : (
              <T.LogoText content={title} />
            )}
          </a>
        </Link>
      ) : (
        <>
          {logoSrc ? (
            <Link href={href} className={className} passHref legacyBehavior>
              <Image src={logoSrc.src} alt={title} width={width} />
            </Link>
          ) : (
            <T.LogoText content={title} />
          )}
        </>
      )}
    </>
  );
}

export default Logo;
