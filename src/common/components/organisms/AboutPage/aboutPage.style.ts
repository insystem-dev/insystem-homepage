import styled from "styled-components";
import { css } from "styled-components";
import AboutusBG from "../../../../styles/assets/image/aboutus/about-background.png";

interface AboutPageProps {
  position?: string;
  direction?: string;
}

export const AboutPage = styled.div`
  padding: 100px 0 50px;

  .about-history {
    display: flex;
    flex-direction: row;

    .section-header {
      width: 190px;

      p {
        color: #6194f4;
        font-size: 2.8rem;
        letter-spacing: -1.5px;
      }

      .section-header-divider {
        width: 40px;
        height: 6px;
        margin-top: 20px;
        background: #6194f4;
      }
    }

    .section-content {
      width: calc(100% - 190px);
      max-width: 1050px;
      margin: 100px 0;

      img {
        width: 100%;
        height: 100%;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
    }
  }
`;

export const AboutPageSection = styled.section<AboutPageProps>`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.position === "top" &&
    css`
      background-image: url(${AboutusBG?.src});
      background-size: 40%;
      background-position: left top;
      background-repeat: no-repeat;
    `}

  ${(props) =>
    props.position === "middle" &&
    css`
      background: ${(props) => props.theme.colors.aboutBg};
    `}
`;

export const AboutPageBox = styled.div`
  display: flex;
  width: 1240px;
  flex-direction: column;
  gap: 60px;

  .section-tit {
    font-family: Noto Sans KR;
    color: ${(props) => props.theme.colors.darkTxt};
    line-height: 5.4rem;
    letter-spacing: -0.15rem;

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const AboutPageList = styled.ul<AboutPageProps>`
  display: flex;
  width: 1240px;
  align-items: flex-end;
  gap: 20px;

  ${(props) =>
    props.direction === "row" &&
    css`
      flex-direction: row;

      li {
        flex: 1;
      }
    `}

  ${(props) =>
    props.direction === "column" &&
    css`
      flex-direction: column;
    `}
`;

export const AboutHistoryImgBox = styled.div`
  display: flex;
  width: 1000px;
  height: auto;
  margin-left: auto;
`;
