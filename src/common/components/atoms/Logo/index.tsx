import React from "react";
import * as S from "./logo.style";
import Link from "../Link";
import Image from "../Image";

type Logo_ty = {
  className?: string;
  logoWrapperStyle?: any;
  width?: string | number;
  height?: string | number;
  withAnchor?: boolean;
  anchorProps?: any;
  logoSrc?: any;
  title?: string;
  href?: string;
};

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
        <Link>
          <a {...anchorProps}>
            {logoSrc ? (
              <Image src={logoSrc.src} alt={title} width={width} />
            ) : (
              <S.LogoText>{title}</S.LogoText>
            )}
          </a>
        </Link>
      ) : (
        <>
          {logoSrc ? (
            <Link href={href} className={className}>
              <Image src={logoSrc.src} alt={title} width={width} />
            </Link>
          ) : (
            <S.LogoText>{title}</S.LogoText>
          )}
        </>
      )}
    </>
  );
};

export default Logo;
