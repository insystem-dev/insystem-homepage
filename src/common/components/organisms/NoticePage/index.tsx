'use client'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AskSection_btn }from "../../atoms/Button";
import TableGrid from "../../molecules/TableGrid";
import { ContainerWrapper } from "../../molecules/Container";
import * as S from "./NoticePage.style";
import { notice } from "../../../data";
import { useRecoilState } from "recoil";
import { Paging } from "../../atoms/Paging";
import { useBoardFetch } from "../../../../hooks/api/notice";
import { setUserId } from "../../../../lib/api";
import { selectedUser } from "../../../../states/user";

const NoticePage = () => {
  // 데이터 input
  const { status, data: userData } = useSession();
  const { data, isLoading } = useBoardFetch();
  const [user, setUser] = useRecoilState(selectedUser);

  const [items, setItems] = useState([]);
  const [notice, setNotice] = useState([]);
  const [modedNotice, setModedNotice] = useState<any>({
    orderedData: [],
    fixedPost: [],
    unfixedPost: [],
  });

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const [indexOfLastPost, setIndexOfLastPost] = useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    if (data) {
      setNotice(data);
      const orderedData = data?.sort(
        (a: any, b: any ) => new Date(b.insert_date).getTime() - new Date(a.insert_date).getTime()
      );
      const fixedPost = orderedData?.filter((data: any) => data.fixed === 1);
      const unfixedPost = orderedData?.filter((data: any) => data.fixed === 0);
      setModedNotice({
        orderedData,
        fixedPost,
        unfixedPost,
      });
    }
  }, [data]);

  useEffect(() => {
    setCount(modedNotice.unfixedPost.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPost(
      modedNotice.fixedPost.concat(
        modedNotice.unfixedPost.slice(indexOfFirstPost, indexOfLastPost)
      )
    );
  }, [
    notice,
    currentPage,
    indexOfFirstPost,
    indexOfLastPost,
    items,
    postPerPage,
  ]);

  const setPage = (e: any) => {
    setCurrentPage(e);
  };

  const onClickLogout = () => {
    setUserId("");
    setUser({
      userId: "",
      userName: "",
    });
    signOut();
  };

  if (isLoading) {
    <>LOADING...</>;
  }

  return (
    <S.NoticeWrapper>
      <ContainerWrapper>
        <S.NoticeBlock_box className="grid">
          {status === "authenticated" && (
            <div className="notice-edit">
              {/* <AskSection_btn variant="edit-primary">
                <Link href="/notice/write" legacyBehavior>
                  글쓰기
                </Link>
              </AskSection_btn>
              <AskSection_btn
                onClick={onClickLogout}
                variant="edit-primary"
              >
                로그아웃
              </AskSection_btn> */}
            </div>
          )}
          {currentPost && notice.length > 0 ? (
            <TableGrid data={currentPost} />
          ) : (
            ""
          )}
          <Paging page={currentPage} count={count} setPage={setPage} />
        </S.NoticeBlock_box>
      </ContainerWrapper>
    </S.NoticeWrapper>
  );
};

export default NoticePage;
