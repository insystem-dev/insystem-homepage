"use client";

import styled from "styled-components";
import AboutusBG from "../../../../styles/assets/image/main/main-about-background.jpg";

export const AboutSection = styled.section`
  display: flex;
  width: 100vw;
  padding: 240px 0;
  background-image: url(${AboutusBG?.src});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

export const AboutBox = styled.div`
  display: flex;
  width: 1240px;
  flex-direction: column;
  gap: 30px;
`;

export const AboutContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 370px);
  grid-template-areas:
    "CS CS EM"
    "PF SL SL";
  gap: 20px;
`;
