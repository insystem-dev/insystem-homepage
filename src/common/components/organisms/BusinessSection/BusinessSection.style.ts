"use client";

import styled from "styled-components";
import BusinessBG from "../../../../styles/assets/image/main/main-business-background.jpg";

export const BusinessSection = styled.section`
  position: relative;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

export const BusinessBox = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 620px;
  margin-top: -80px;
  padding: 130px 86px 0;
  background-image: url(${BusinessBG?.src});
  background-size: cover;
  border-radius: 80px;
  justify-content: center;
`;

export const BusinessContentBox = styled.div`
  position: relative;
  display: grid;
  max-width: 1240px;
  height: 250px;
  top: -250px;
  grid-template-columns: repeat(3, 400px);
  gap: 20px;
`;
