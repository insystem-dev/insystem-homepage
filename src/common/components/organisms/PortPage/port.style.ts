"use client";

import styled, { css } from "styled-components";
import PortBg01 from "../../../../styles/assets/image/port/port-1.png";
import PortBg02 from "../../../../styles/assets/image/port/port-2.png";

export type PortProps = {
  section?: string;
};

export const PortPage = styled.div`
  min-height: calc(100vh - 680px);
`;

export const PortSection = styled.section<PortProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.section === "port" &&
    css`
      background-image: url(${PortBg01?.src});
      background-size: 60%;
      background-position: right bottom;
      background-repeat: no-repeat;

      & > div {
        padding: 126px 0 130px;
      }
    `}

  ${(props) =>
    props.section === "quarantine" &&
    css`
      padding: 0;

      & > div {
        & > div {
          display: grid;
          grid-template-columns: repeat(2, 50%);
          gap: 20px;
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

export const PortBox = styled.div`
  width: 1240px;
`;

export const PortSectionImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${PortBg02?.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PortList = styled.ul`
  display: flex;
  width: 1240px;
  padding: 80px 0;
  flex-wrap: wrap;
  align-items; center;
  justify-content: center;
  gap: 80px 50px;
`;
