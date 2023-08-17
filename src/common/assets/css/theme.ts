import { DefaultTheme } from "styled-components";
import AboutBG from '../image/agency/page-header/page-header-img01.jpg';
import HealthBG from '../image/agency/page-header/page-header-img0201.jpg';
import PortBG from '../image/agency/page-header/page-header-img0202.jpg';
import SiBG from '../image/agency/page-header/page-header-img0203.jpg';
import NoticeBG from '../image/agency/page-header/page-header-img03.jpg';
import InquiryBG from '../image/agency/page-header/page-header-img04.jpg';

export const theme: DefaultTheme = {
  gradient: {
    askBoxBg:
      "linear-gradient(140deg, #6194F4, #4077DD)",
  },
  shadow: {
    primary: "0 2px 6px -3px rgba(0,0,0,0.1)",
    formTemplate: "0 -2px 10px -4px rgba(0,0,0,0.25)",
    navigation: "0 2px 10px 0 rgba(0,0,0,0.07)",
    btn: "0 2px 10px -5px rgba(0,0,0,0.15)",
    box: "0 4px 10px 0 rgba(0,0,0,.15)",
  },
  colors: {
    // PALETTE
    primary: "#6093F4",
    white: "#ffffff",
    whiteActive: "#F6F7FA",
    black: "#000000",

    // TEXT
    titleTxt: "#2E397C",
    darkTxt: "#2B2F45",
    headerTxt: "#6194F4",
    iconNavTxt: "#484848",
    iconNavActiveTxt: "#2E397C",
    tabTxt: "#A5A8BA",
    listTitTxt: "#2B2F45",
    unitTxt: "#797979",
    expTxt: "#565656",
    noitemTxt: "#535353",
    dottedTxt: "#DF6464",

    // BORDER
    linkBtnBorder: "#F2F3FC",
    divideBorder: "#EDEEF3",
    itemExpborder: "#F2F3FC",

    // BACKGROUND
    aboutBg: "#6194F4",
    listCheckedBg: "#F2F3FC",
    shadeBg: "#F3F3F3",
    handleBg: "#EEEEEE",
    skeleton: "#e5e5e5",
    none: "none",

    // LAYOUT

    // INPUT
    labelTxt: "#797979",
    inputBorder: "#DFDFDF",
    inputBg: "#F9F9F9",
    inputDisabledBg: "#DFDFDF",
  },
  fontSizes: {
    pageTitle: "3rem",
    pageSubTitle: "2.2rem"
  },

  widths: {
    navLogo: "160px",
    footerLogo: "200px"
  },
  background: {
    aboutUS: AboutBG,
    health: HealthBG,
    port: PortBG,
    si: SiBG,
    notice: NoticeBG,
    inqury: InquiryBG
  },
};
