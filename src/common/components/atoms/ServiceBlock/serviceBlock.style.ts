"use client";

import styled from "styled-components";

export const ServiceBlock = styled.li`
  width: 380px;
`;

export const ServiceBlockLabel = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0;
`;

export const ServiceBlockTit = styled.div`
  margin-top: 4px;
  color: ${(props) => props.theme.colors.darkTxt};
  font-family: Noto Sans KR;
  font-size: 2.8rem;
  font-weight: 600;
`;

export const ServiceBlockContent = styled.div`
  margin-top: 16px;
  color: ${(props) => props.theme.colors.commonTxt};
  font-size: 1.8rem;
  line-height: 2.6rem;
`;
