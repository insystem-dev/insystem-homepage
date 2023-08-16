"use client";

import React, { useEffect, useState } from "react";
import TableTr from "../TableTr";
import TableGridWrapper from "./tableGrid.style";

type data_ty = {
    data: any,
    item?: string,
    idx?: number,
}


const TableGrid = ({ data }: data_ty) => {
  return (
    <>
      <TableGridWrapper>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: data_ty, idx: data_ty) => {
              return <TableTr key={idx} item={item} />;
            })}
          {!data && (
            <tr>
              <td colSpan={5} className="tr-nodata">
                등록된 공지사항이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </TableGridWrapper>
    </>
  );
};

// TableGrid default style
TableGrid.defaultProps = {};

export default TableGrid;
