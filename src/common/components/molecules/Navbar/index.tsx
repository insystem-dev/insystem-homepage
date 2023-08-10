import React from 'react';
import NavbarStyle from './navbar.style';

const Navbar = ({ className, children, navbarStyle, ...props }: any) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__navbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <NavbarStyle
      height = {70}
      className={addAllClasses.join(' ')} {...props}>
      {children}
    </NavbarStyle>
  );
};

export default Navbar;
