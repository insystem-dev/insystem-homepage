"use client";

import styled, { css } from "styled-components";

export const NoticeSection = styled.section`
  display: flex;
  min-height: calc(100vh - 680px);
  padding: 70px 0;
  align-items: center;
  justify-content: center;

  .container {
    padding: 70px 0;

    .notice-edit {
      display: flex;
      width: 100%;
      max-width: 1170px;
      margin: 0 auto 10px;
      justify-content: flex-end;
    }
  }
`;

export const NoticeBox = styled.div`
  display: flex;
  width: 1240px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const NoticeBtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 5px;
`;

export const NodataBox = styled.div`
  width: 100%;
  font-size: 2rem;
`;

export const NoticeGridBox = styled.div`
  width: 100%;
`;
