"use client";

import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .logolink {
    cursor: pointer;
    img {
    }
  }

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
    max-width: 1240px;
  }
`;

export const ContainerWrapper_style = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${(props: any) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props: any) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 15px;
      padding-right: 15px;
    `};

  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }

  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }

  @media (min-width: 1220px) {
    max-width: ${(props: any) => props.width || "1240px"};
    width: 100%;
  }

  @media (max-width: 768px) {
    ${(props: any) =>
      props.mobileGutter &&
      css`
        padding-left: 30px;
        padding-right: 30px;
      `};
  }
`;
