"use client";

import styled from "styled-components";

export const PartBlockBox = styled.div`
  display: flex;
  height: 400px;
  padding: 50px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.navigation};
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentTitBox = styled.div`
  color: ${(props) => props.theme.colors.darkTxt};
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: -0.05rem;

  span {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

export const ContentTxtBox = styled.div`
  color: ${(props) => props.theme.colors.contentTxt};
  font-size: 1.6rem;
  letter-spacing: -0.05rem;
  line-height: 2.2rem;
`;
