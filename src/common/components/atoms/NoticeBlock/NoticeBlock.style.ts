"use client";

import styled from "styled-components";

export const NoticeBlock = styled.div`
  display: flex;
  width: 210px;
  height: 220px;
  padding: 30px 0;
  cursor: pointer;

  & + div {
    & > div {
      border-left: 1px solid ${(props) => props.theme.colors.divideBorder};
    }
  }
`;

export const TitBox = styled.div`
  position: relative;
`;

export const NoticeBlockTit = styled.div`
  overflow: hidden;
  display: -webkit-box;
  margin-top: 24px;
  color: ${(props) => props.theme.colors.darkTxt};
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.8px;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const NoticeBlockTxt = styled.div`
  overflow: hidden;
  display: -webkit-box;
  color: ${(props) => props.theme.colors.commonTxt};
  font-size: 1.6rem;
  line-height: 2rem;
  letter-spacing: -0.4px;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const NoticeBlockDate = styled.div`
  color: ${(props) => props.theme.colors.dateTxt};
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.6px;
  text-align: right;
`;

export const NoticeBlockBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 35px 16px;
  justify-content: space-between;
  flex-direction: column;

  &:hover {
    ${NoticeBlockTit} {
      font-weight: 600;
      border-bottom: 1px solid ${(props) => props.theme.colors.darkTxt};
    }

    ${NoticeBlockTxt} {
      font-weight: 500;
    }
  }
`;
