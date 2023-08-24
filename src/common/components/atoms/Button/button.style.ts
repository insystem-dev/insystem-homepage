import styled from "styled-components";
import { ButtonProps } from ".";

export const AskSectionBtn = styled.button`
  display: flex;
  width: 150px;
  height: 50px;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.color};
  border-radius: 43px;
  background: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    background: ${(props) => props.theme.colors.white};
    transition: all 0.2s ease;
  }
`;

export const BusinessBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.8rem;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    font-weight: 600;
    background: #4077dd;
    box-shadow: 0 4px 10px 0 rgb(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }
`;

export const NoticeBtn = styled.button`
  position: absolute;
  width: 56px;
  height: 56px;
  top: 77px;
  right: -28px;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
  }

  svg {
    path:last-child {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

export const FooterBtn = styled.button`
  padding: 5px 14px;
  color: ${(props) => props.theme.colors.footerTxt};
  font-size: 1.8rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.darkTxt};
    background: ${(props) => props.theme.colors.skeleton};
    transition: all 0.3s ease;
  }
`;

export const inquiryBtn_style = styled.button<ButtonProps>`
  width: 190px;
  height: 50px;
  font-size: 1.8rem;
  border-radius: 60px;
  color: ${(props) => {
    if (props.color == "blue") {
      return props.theme.colors.headingTitle;
    } else {
      return props.theme.colors.white;
    }
  }};
  background: ${(props) => {
    if (props.background == "blue") {
      return props.theme.colors.aboutBg;
    } else {
      return props.theme.colors.none;
    }
  }};
  border: ${(props) => {
    console.log(props);
    if (props.border == "white") {
      return "1px solid " + props.theme.colors.headingTitle;
    } else {
      return props.theme.colors.none;
    }
  }};
`;
