import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  height: 260px;
  padding: 60px 0;
  background: ${(props) => props.theme.colors.footerBg};
  align-items: center;
  justify-content: center;
`;

export const FooterBox = styled.div`
  display: grid;
  width: 1240px;
  grid-template-columns: 295px auto;

  a {
    height: 40px;
  }
`;

export const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FooterBtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const FooterInfoList = styled.ul`
  display: flex;
  max-width: 960px;
  flex-wrap: wrap;
  gap: 5px 20px;
`;

export const FooterInfoItem = styled.li`
  color: ${(props) => props.theme.colors.footerTxt};
  font-size: 1.6rem;
  letter-spacing: -0.05rem;

  & + li {
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 14px;
      margin-right: 20px;
      background: ${(props) => props.theme.colors.footerTxt};
    }
  }
`;

export const FooterCopy = styled.p`
  color: ${(props) => props.theme.colors.footerTxt};
  font-size: 1.4rem;
  letter-spacing: 0rem;
`;
