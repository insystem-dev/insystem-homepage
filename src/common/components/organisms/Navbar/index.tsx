"use client";

import React, { useContext, useState } from "react";
import * as S from "./navbar.style";
import { NavbarContainer } from "../../molecules/Container/index";
import Logo from "../../atoms/Logo";
import NavMenu from "../../molecules/NavMenu";
import LogoImage from "../../../../styles/assets/image/logo.png";
import { DrawerContext } from "../../../contexts/DrawerContext";
import { data, menuData } from "../../../data/index";

const Navbar = ({ logoStyle }: any) => {
  const [open, setOpen] = useState(false);
  const { state, dispatch }: any = useContext(DrawerContext);

  // mouseover drawer
  const hoverHandler = () => {
    dispatch({
      type: "MOUSEOVER",
    });
  };

  return (
    <S.NavbarWrapper>
      <NavbarContainer>
        <Logo
          href="/"
          logoSrc={LogoImage}
          className="logolink"
          title="(주)인시스템 메인화면 이동"
          width="navLogo"
        />

        <div
          className={`nav-wrap ${open ? "open" : "close"}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <NavMenu navmenus={data.menus} />
          <div className="nav-sub-wrap">
            <ul className="nav-sub-list">
              <li>
                <NavMenu deptmenus={menuData.about} />
              </li>
              <li>
                <NavMenu deptmenus={menuData.services} />
              </li>
              <li>
                <NavMenu deptmenus={menuData.notice} />
              </li>
              <li>
                <NavMenu deptmenus={menuData.inquiry} />
              </li>
            </ul>
          </div>
        </div>
        <div className={`nav-sub-background ${open ? "open" : "close"}`} />
      </NavbarContainer>
    </S.NavbarWrapper>
  );
};

export default Navbar;
