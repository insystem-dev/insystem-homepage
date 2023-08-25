"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { signOut, useSession } from "next-auth/react";
import { Paging } from "../../atoms/Paging";
import TableGrid from "../../molecules/TableGrid";
import { setUserId } from "../../../../lib/api";
import { selectedUser } from "../../../../states/user";
import { useBoardFetch } from "../../../../hooks/api/notice";
import { notice } from "../../../data";
import * as S from "./NoticePage.style";
import { PostBtn } from "../../atoms/Button";
import { useRouter } from "next/navigation";

const NoticePage = () => {
  const Router = useRouter();
  // 데이터 input
  const { status, data: userData } = useSession();
  const { data, isLoading } = useBoardFetch();
  const [user, setUser] = useRecoilState(selectedUser);

  const [items, setItems] = useState([]);
  // const [notice, setNotice] = useState([]);
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
    if (notice) {
      // setNotice(data);
      const orderedData = notice?.sort(
        (a: any, b: any) =>
          new Date(b.insert_date).getTime() - new Date(a.insert_date).getTime()
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
    <S.NoticeSection>
      <S.NoticeBox>
        {status === "authenticated" && (
          <S.NoticeBtnBox>
            <PostBtn
              title="글쓰기"
              type="button"
              onClick={() => Router.push("/notice/write")}
            />
            <PostBtn
              title="로그아웃"
              type="button"
              color="secondary"
              onClick={onClickLogout}
            />
          </S.NoticeBtnBox>
        )}
        <S.NoticeGridBox>
          {notice && notice.length > 0 ? (
            <TableGrid data={currentPost} />
          ) : (
            <TableGrid nodata={true} />
          )}
        </S.NoticeGridBox>
        <Paging page={currentPage} count={count} setPage={setPage} />
      </S.NoticeBox>
    </S.NoticeSection>
  );
};

export default NoticePage;
