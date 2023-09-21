"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import * as S from "./tableTr.style";
import PostTag from "../../atoms/PostTag";

const TableTr = ({ item }: any) => {
  const postDate = moment(item.insert_date).format("YYYY-MM-DD");

  return (
    <S.TableTr className={`${item.fixed ? "notice-fixed" : ""}`}>
      {/* 번호 */}
      {item.fixed ? (
        <S.TableTd className="td-id">중요</S.TableTd>
      ) : (
        <S.TableTd className="td-id">{item.id}</S.TableTd>
      )}
      {/* 제목 */}
      <S.TableTd className="td-title">
        {/* 임시 메인 링크 */}
        <Link href="/" as={`/`} legacyBehavior>
          <a> {item.title} </a>
        </Link>
      </S.TableTd>
      {/* 날짜 */}
      <S.TableTd className="td-date">{postDate}</S.TableTd>
      {/* 작성자 */}
      <S.TableTd className="td-username">{item.username}</S.TableTd>
      {/* 조회수 */}
      <S.TableTd className="td-views">{item.views}</S.TableTd>
    </S.TableTr>
  );
};

export default TableTr;
