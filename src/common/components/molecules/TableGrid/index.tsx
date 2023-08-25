"use client";

import React, { useEffect, useState } from "react";
import TableTr from "../TableTr";
import * as S from "./tableGrid.style";

type noticeProps = {
  data?: any;
  nodata?: boolean;
};

const TableGrid = ({ data, nodata }: noticeProps) => {
  return (
    <>
      <S.TableBox>
        <thead>
          <S.Tr>
            <S.Th>번호</S.Th>
            <S.Th>제목</S.Th>
            <S.Th>날짜</S.Th>
            <S.Th>작성자</S.Th>
            <S.Th>조회수</S.Th>
          </S.Tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: any, idx: number) => {
              return <TableTr key={idx} item={item} />;
            })}
          {nodata && (
            <S.NodataTr>
              <S.NodataTd colSpan={5} className="tr-nodata">
                등록된 공지사항이 없습니다.
              </S.NodataTd>
            </S.NodataTr>
          )}
        </tbody>
      </S.TableBox>
    </>
  );
};

// TableGrid default style
TableGrid.defaultProps = {};

export default TableGrid;
