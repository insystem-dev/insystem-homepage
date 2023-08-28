"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";
import NoticeBlock from "../../atoms/NoticeBlock";
import { NoticeBtn } from "../../atoms/Button";
import { notice } from "../../../data";
import * as S from "./noticeSection.style";

const NoticeSection = ({}) => {
  const Router = useRouter();
  const [items, setItems] = useState([]);

  const onNoticeBtnClick = () => {
    Router.push("/notice");
  };

  useEffect(() => {
    const orderedData: any = notice.sort(
      (a: any, b: any) =>
        new Date(b.insert_date).getTime() - new Date(a.insert_date).getTime()
    );
    setItems(orderedData.slice(0, 5));
  }, []);

  return (
    <Fade direction="up" triggerOnce>
      <S.NoticeSection>
        <S.NoticeBox className="row">
          <S.NoticeTitBox className="row-title">공지사항</S.NoticeTitBox>
          {notice &&
            items.map((item, idx) => {
              return <NoticeBlock data={item} key={idx} />;
            })}
        </S.NoticeBox>
        <NoticeBtn type="button" onClick={onNoticeBtnClick} />
      </S.NoticeSection>
    </Fade>
  );
};

export default NoticeSection;
