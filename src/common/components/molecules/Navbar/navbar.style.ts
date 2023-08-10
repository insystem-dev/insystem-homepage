import styled, { keyframes } from 'styled-components';
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
} from 'styled-system';


const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  position: sticky;
  position: -webkit-sticky;
  display: flex;
  min-height: 56px;
  top: 0;
  padding: 10px 16px;
  background-color: white;
  align-items: center;

  .nav-wrap {
    width: 640px;
    font-size: 1.8rem;
    justify-content: flex-end;
    z-index: 10;
    transition: all 0.3s ease;

    &.open {
      .nav-sub-wrap {
        max-height: 100vh;
        transition: all 1s ease;
      }
    }

    &.close {
      .nav-sub-wrap {
        max-height: 0;
        transition: all 0.3s ease;
      }
    }

    .nav-sub-wrap {
      position: absolute;
      overflow: hidden;
      top: 70px;
      left: 0;
      width: 100%;
      padding: 0 16px;
      background: white;
      transition: all 0.3s ease;

      .nav-sub-list {
        overflow: hidden;
        display: flex;
        width: 100%;
        height: auto;
        padding: 0 23px 25px 25px;
        margin: 0 auto;
        font-size: 1.6rem;
        flex-direction: row;
        justify-content: flex-end;

        @media (min-width: 320px) {
          padding-left: 25px;
          padding-right: 23px;
        }
        @media (min-width: 768px) {
          max-width: 750px;
        }
        @media (min-width: 992px) {
          max-width: 970px;
        }
        @media (min-width: 1200px) {
          max-width: 1270px;
        }
      }
    }
  }

  .nav-sub-background {
    &.open {
      position: fixed;
      display: block;
      width: 100%;
      height: calc(100vh - 70px);
      top: 70px;
      left: 0;
      background: rgba(0,0,0,.6);
    }

    &.close {
      display: none;
    }
  }

  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`;

NavbarStyle.displayName = 'NavbarStyle';

export default NavbarStyle;
