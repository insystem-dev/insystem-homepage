"use client";

import styled from "styled-components";
import Aboutus1 from "../../../../styles/assets/image/aboutus/about-img01.webp";
import Aboutus2 from "../../../../styles/assets/image/aboutus/about-img02.webp";
import Aboutus3 from "../../../../styles/assets/image/aboutus/about-img03.webp";

export const ColumnListBlock = styled.li`
  overflow: hidden;
  width: 1050px;
  padding: 50px;
  text-align: right;
  line-height: 30px;
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -1px;
  background: ${(props) => props.theme.colors.white};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px 0 40px 0;
  box-shadow: ${(props) => props.theme.shadow.navigation};

  &.about01 {
    background-image: url(${Aboutus1?.src});
  }

  &.about02 {
    background-image: url(${Aboutus2?.src});
  }

  &.about03 {
    background-image: url(${Aboutus3?.src});
  }

  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
  }
`;

export const RowListBlock = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  .list__block-tit {
    font-family: "Roboto";
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: 0;
  }

  .list__block-label {
    margin-top: 4px;
    font-family: "Roboto";
    color: ${(props) => props.theme.colors.primary};
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0;
  }

  .list__block-cont {
    height: 80px;
    margin-top: 14px;
    padding: 0 20px;
    color: ${(props) => props.theme.colors.darkTxt};
    font-size: 1.8rem;
    text-align: center;
    letter-spacing: -0.05rem;
    line-height: 2.4rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 38px;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }
`;
