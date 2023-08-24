"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import PostTag from "../PostTag";
import * as S from "./NoticeBlock.style";

export type noticeBolck = {
  data: any;
};

const NoticeBlock = ({ data }: noticeBolck) => {
  const fixDateFormat = (e: any) => {
    return moment(e).format("YYYY-MM-DD");
  };
  const [dateNew, setDateNew] = useState(false);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    let day = date.getDate() + "";

    if (day.length < 2) {
      day = "0" + day;
    }

    const getDate = year + "-" + month + "-" + day;

    const today = new Date(getDate).getTime();
    const postDate = new Date(data.insert_date).getTime();

    if (Math.ceil((today - postDate) / (24 * 60 * 60 * 1000)) <= 3) {
      setDateNew(true);
    }
  }, []);

  return (
    <S.NoticeBlock>
      <Link href="/notice/post/[id]" as={`/board/${data.id}`} legacyBehavior>
        <S.NoticeBlockBox>
          <S.TitBox>
            {dateNew === true && <PostTag type="new" />}
            <S.NoticeBlockTit>{data.title}</S.NoticeBlockTit>
          </S.TitBox>
          <S.NoticeBlockTxt>{data.content}</S.NoticeBlockTxt>
          <S.NoticeBlockDate>
            {fixDateFormat(data.insert_date)}
          </S.NoticeBlockDate>
        </S.NoticeBlockBox>
      </Link>
    </S.NoticeBlock>
  );
};

export default NoticeBlock;
