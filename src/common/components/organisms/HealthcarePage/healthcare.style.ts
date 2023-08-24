"use client";

import styled, { css } from "styled-components";
import HealthCareBg01 from "../../../../styles/assets/image/healthcare/healthcare-1.png";
import HealthCareBg02 from "../../../../styles/assets/image/healthcare/healthcare-2.png";

export type HealthCareProps = {
  section?: string;
};

export const HealthCarePage = styled.div`
  min-height: calc(100vh - 680px);
`;

export const HealthCareSection = styled.section<HealthCareProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.section === "diabetes" &&
    css`
      background-image: url(${HealthCareBg01?.src});
      background-size: cover;
      background-position: right top;
      background-repeat: no-repeat;

      & > div {
        padding: 126px 0 240px;
      }
    `}

  ${(props) =>
    props.section === "smartshoes" &&
    css`
      padding: 0;

      & > div {
        & > div {
          display: grid;
          grid-template-columns: repeat(2, 50%);
        }
      }

      h3 {
        display: flex;
        padding: 126px 0;
        text-align: right;
        flex-direction: column;
        align-items: flex-end;

        p {
          text-align: right;
        }
      }
    `}

    ${(props) =>
    props.section === "list" &&
    css`
      background: ${(props) => props.theme.colors.aboutBg};
    `}
`;

export const HealthCareBox = styled.div`
  width: 1240px;
`;

export const HealthCareSectionImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${HealthCareBg02?.src});
  background-size: 120%;
  background-position: left;
  background-repeat: no-repeat;
`;

export const HealthCareList = styled.ul`
  display: flex;
  width: 1240px;
  padding: 80px 0;
  flex-wrap: wrap;
  align-items; center;
  justify-content: center;
  gap: 80px 50px;
`;
