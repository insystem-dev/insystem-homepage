"use client";

import styled from "styled-components";
import { HeadingProps } from ".";

export const HeadingBox = styled.h3<HeadingProps>`
  max-width: 1240px;
  margin: 0px;
  font-family: Roboto;
  font-size: 4.2rem;
  font-weight: bold;
  text-align: left;
  line-height: 5rem;
  letter-spacing: -0.5px;
  color: ${(props) =>
    props.color == "white"
      ? props.theme.colors.white
      : props.theme.colors.primary};
`;

export const PageHeadingBox = styled.p<HeadingProps>`
  display: flex;
  color: ${(props) =>
    props.color == "white"
      ? props.theme.colors.white
      : props.theme.colors.primary};
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 3.2rem;
  font-weight: 600;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const HeadingDividerBox = styled.div`
  width: 90px;
  height: 6px;
  margin: 30px 0;
  background: ${(props) =>
    props.color == "white"
      ? props.theme.colors.white
      : props.theme.colors.primary};
`;

export const HeadingContentBox = styled.p`
  font-family: Noto Sans KR;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.4rem;
  letter-spacing: -1px;
  text-align: left;
  color: ${(props) =>
    props.color == "white"
      ? props.theme.colors.white
      : props.theme.colors.darkTxt};
`;

export const PageHeadDividerBox = styled.div`
  width: 40px;
  height: 4px;
  background: ${(props) => props.theme.colors.white};
`;

export const PageHeadContBox = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
`;
