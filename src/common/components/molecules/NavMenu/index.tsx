'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavMenuWrapper, DeptMenuWrapper } from './navMenu.style';

type NavMenu_ty = {
    navmenus?: any,
    wrapperStyle?: any,
    deptmenus?: any,
    children?: any
}


const NavMenu = ({ navmenus, wrapperStyle, deptmenus, children }: NavMenu_ty) => {
    const [mouseOver, setMouseOver] = useState([]);
    const pathname = usePathname();

    if (navmenus) {
        return (
            <NavMenuWrapper {...wrapperStyle}>
                {navmenus.map((navmenu: any) => {
                    return (
                        <li className={`${pathname.includes(navmenu.path) ? "active" : "inactive"}`} key={`navmenu-${navmenu.id}`}>
                            <Link legacyBehavior
                                href={navmenu.path}>
                                <a> {navmenu.label} </a>
                            </Link>
                        </li>
                    )
                })}
            </NavMenuWrapper>
        )
    }

    if (deptmenus) {
        return (
            <DeptMenuWrapper {...wrapperStyle}>
                {deptmenus.map((deptmenu: any) => {
                    return (
                        <li className={`${pathname.includes(deptmenu.path) ? "active" : "inactive"} `} key={`deptmenu-${deptmenu.id}`}>
                            <Link legacyBehavior
                                href={deptmenu.path}>
                                <a> {deptmenu.label} </a>
                            </Link>
                        </li>
                    )
                })}
            </DeptMenuWrapper>
        )
    }
}

export default NavMenu;