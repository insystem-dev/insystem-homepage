"use client";

import styled from "styled-components";

export const AskSection = styled.section`
  position: absolute;
  display: flex;
  width: 1240px;
  top: 620px;
  margin: 0 auto;
  flex-direction: row-reverse;
  z-index: 5;
`;

export const AskBox = styled.div`
  display: flex;
  width: 440px;
  padding: 46px 50px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.gradient.askBoxBg};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
  flex-direction: column;
  gap: 14px;

  button {
    display: flex;
    margin-left: auto;
    margin-top: 16px;
  }
`;

export const AskTit = styled.div`
  font-family: Noto Sans KR;
  font-size: 2.4rem;
  font-weight: 500;
  text-align: left;
  letter-spacing: -0.05em;
`;

export const AskTel = styled.div`
  font-family: Roboto;
  font-size: 4.2rem;
  text-align: left;
  font-weight: 600;
`;

export const AskTxt = styled.div`
  font-family: Noto Sans KR;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: left;
  font-weight: 400;
`;
