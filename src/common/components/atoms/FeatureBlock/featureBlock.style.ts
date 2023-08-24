import styled, { css } from "styled-components";
import CustomBG from "../../../../styles/assets/image/main/main-about-img01.jpg";
import BlankBG from "../../../../styles/assets/image/main/main-about-img02.png";
import SolutionBG from "../../../../styles/assets/image/main/main-about-img03.jpg";
import PlatformBG from "../../../../styles/assets/image/main/main-about-img04.jpg";
import { FeatureBlockProps } from ".";

export const FeatureContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 50px;
  color: ${(props) => props.theme.colors.white};
  flex-direction: column;
  transition: all 0.3s ease;
  gap: 20px;

  &:nth-child(1):hover,
  &:nth-child(3):hover,
  &:nth-child(4):hover {
    transition: all 0.3s ease;
    opacity: 1;
  }
`;

export const FeatureBox = styled.div<FeatureBlockProps>`
  grid-area: ${(props) => props.areas};
  background-size: cover;
  box-shadow: ${(props) => props.theme.shadow.primary};
  transition: all 0.3s ease;
  cursor: pointer;

  ${(props) =>
    props.areas === "CS" &&
    css`
      background-image: url(${CustomBG?.src});

      &:hover {
        box-shadow: ${(props) => props.theme.shadow.navigation};
      }

      ${FeatureContentBox} {
        background: rgba(0, 0, 0, 0.7);
        justify-content: flex-end;
        opacity: 0;
      }
    `};

  ${(props) =>
    props.areas === "EM" &&
    css`
      overflow: hidden;
      background: ${(props) => props.theme.colors.secondary};
      border-radius: 0 210px 0 0;
      cursor: default;

      ${FeatureContentBox} {
        background-image: url(${BlankBG?.src});
        background-size: cover;

        .flaticon-next {
          display: none;
        }
      }
    `};

  ${(props) =>
    props.areas === "PF" &&
    css`
      overflow: hidden;
      background-image: url(${SolutionBG?.src});
      border-radius: 0 0 0 210px;

      ${FeatureContentBox} {
        background: rgba(0, 0, 0, 0.7);
        opacity: 0;

        p,
        h2 {
          text-align: right;
        }

        .content-divider {
          margin-left: auto;
        }
      }

      &:hover {
        box-shadow: ${(props) => props.theme.shadow.navigation};
      }
    `};

  ${(props) =>
    props.areas === "SL" &&
    css`
      background-image: url(${PlatformBG?.src});

      &:hover {
        box-shadow: ${(props) => props.theme.shadow.navigation};
      }

      ${FeatureContentBox} {
        background: rgba(0, 0, 0, 0.7);
        opacity: 0;
      }
    `};
`;

export const ContentTitBox = styled.div`
  margin-bottom: 0;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 3.6rem;
  letter-spacing: -0.2px;
`;

export const ContentDivider = styled.div`
  width: 50px;
  height: 6px;
  background: ${(props) => props.theme.colors.white};
`;

export const ContentTxtBox = styled.div`
  font-size: 1.6rem;
  line-height: 2.6rem;
`;

export const ContentArrows = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 2.6rem;
  font-weight: bold;
  text-align: right;
`;
