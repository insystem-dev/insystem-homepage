"use client";

import styled, { css } from "styled-components";
import { pageHeaderProps } from "./index";
import AboutBG from "../../../../styles/assets/image/page-header/page-header-img01.jpg";
import HealthBG from "../../../../styles/assets/image/page-header/page-header-img0201.jpg";
import PortBG from "../../../../styles/assets/image/page-header/page-header-img0202.jpg";
import DistributionBG from "../../../../styles/assets/image/page-header/page-header-img0203.jpg";
import NoticeBG from "../../../../styles/assets/image/page-header/page-header-img03.jpg";
import InquiryBG from "../../../../styles/assets/image/page-header/page-header-img04.jpg";

export const PageHeaderWrapper = styled.div<pageHeaderProps>`
  display: flex;
  height: 330px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.variant == "about") {
      return css({ backgroundImage: `url(${AboutBG.src})` });
    } else if (props.variant == "health") {
      return css({ backgroundImage: `url(${HealthBG.src})` });
    } else if (props.variant == "port") {
      return css({ backgroundImage: `url(${PortBG.src})` });
    } else if (props.variant == "distribution") {
      return css({ backgroundImage: `url(${DistributionBG?.src})` });
    } else if (props.variant == "notice") {
      return css({ backgroundImage: `url(${NoticeBG?.src})` });
    } else if (props.variant == "inquiry") {
      return css({ backgroundImage: `url(${InquiryBG?.src})` });
    }
  }};
`;
