"use client";

import styled from "styled-components";

export const WriteSection = styled.section`
  display: flex;
  padding: 70px 0;
  background: ${(props) => props.theme.colors.footerBg};
  flex-direction: column;
  align-items: center;
`;

export const WriteForm = styled.form`
  display: flex;
  width: 1240px;
  padding: 70px 0;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.primary};
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputGroupRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  gap: 80px;
`;

export const InputBtnRow = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  div {
    display: flex;
    gap: 10px;
  }

  span {
    color: ${(props) => props.theme.colors.dottedTxt};
    font-size: 1.6rem;
  }
`;

export const WriteFormTit = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.darkTxt};
  font-size: 2.8rem;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme.colors.unitTxt};
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
  }
`;
