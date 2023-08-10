'use client'

import styled from 'styled-components';
import BannerBG from '../../../assets/image/agency/main/main-banner.jpg';
import BannerTIT from '../../../assets/image/agency/main/main-title.png';
import { Banner_props } from '.';

export const BannerWrapper = styled.section`
    height: 820px;
    padding-top: 320px;
    padding-bottom: 160px;
    background-image: url(${BannerBG?.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

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

    .row {
      position: relative;
      z-index: 1;
      width: 408px;
      height:92px;
      background-image: url(${BannerTIT?.src});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
`;

