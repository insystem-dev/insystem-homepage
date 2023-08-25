import styled from "styled-components";

export const TableTr = styled.tr`
  height: 50px;

  &:hover {
    color: ${(props) => props.theme.colors.primaryHover};
    font-weight: 600;
    background: ${(props) => props.theme.colors.tableTrHover};

    a {
      color: ${(props) => props.theme.colors.primaryHover};
      font-weight: 600;
      text-decoration: underline;
    }
  }

  &.notice-fixed {
    color: ${(props) => props.theme.colors.notiFixTxt};
    font-weight: 600;
    background: ${(props) => props.theme.colors.footerBg};

    a {
      color: ${(props) => props.theme.colors.notiFixTxt};
    }

    &:hover {
      background: ${(props) => props.theme.colors.notiFixBg};
    }
  }
`;

export const TableTd = styled.td`
  font-family: Noto Sans KR;
  text-align: center;

  &.td-title {
    width: 66%;
    padding: 0 30px;
    text-align: left;

    &:hover {
      cursor: pointer;
    }
  }

  &.td-id,
  &.td-views {
    width: 7%;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 45px;
    line-height: 45px;
  }
`;
