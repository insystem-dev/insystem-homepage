"use client";

import styled from "styled-components";
import BannerBG from "../../../../styles/assets/image/main/main-banner.jpg";
import BannerTIT from "../../../../styles/assets/image/main/main-title.png";

export const BannerSection = styled.section`
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 760px;
  background-image: url(${BannerBG?.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1367px) {
  }

  @media (max-width: 990px) {
    padding-top: 150px;
    padding-bottom: 100px;
  }

  @media only screen and (max-width: 480px) {
    background: none;
    padding-top: 130px;
    padding-bottom: 60px;
  }
`;

export const BannerTitBox = styled.div`
  position: relative;
  width: 1240px;
  height: 92px;
  margin-bottom: 40px;
  background-image: url(${BannerTIT?.src});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  z-index: 1;

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
