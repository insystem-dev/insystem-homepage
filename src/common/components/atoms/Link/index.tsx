'use client'

import React from 'react';
import { LinkWrapper } from './Link.style';

export type Link_props = {
  children: any
  href: any | string
  className: string | any
}

const Link = ({
  children,
  className,
  href
}: Link_props) => {
  return (
    <LinkWrapper
      className={className}
      href={href}
    >
      {children}
    </LinkWrapper>
  )
}

export default Link

// import LinkWrapper from './Link.style';

// export const Link = ({ 
//   children
// }: any) => (
//   <LinkWrapper>{children}</LinkWrapper>
// );