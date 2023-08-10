'use client'

import React, { useState } from "react";
import { ContainerWrapper } from "../../molecules/Container";
import * as S from "./post.style";
import { InquiryBtn } from "../../atoms/Button";
import Router from "next/router";
import Link from "next/link";
import Modal from "../../atoms/Modal";
import { request } from "../../../../lib/api";
import { BOARD } from "../../../data/comCode";
import { useRecoilState } from "recoil";
import { selectedUser } from "../../../../states/user";
import { useSession } from "next-auth/react";

export type Post_props = {
  data?: Object | any
}

const Post = ({ 
  data,
}: Post_props) => {
  const [user, setUser] = useRecoilState(selectedUser);
  const { status, data: userData } = useSession();
  const [show, setShow] = useState(false);

  const onModalClick = async () => {
    const result = await request({
      method: "DELETE",
      url: `/api/${BOARD}`,
      params: { id: data.id },
    });

    if (result?.status === 200) {
      Router.push("/board");
    }
  };

  console.log(data);

  return (
    <>
      <S.PostWrapper>
        <ContainerWrapper>
          {status === "authenticated" && (
            <div className="post-edit">
              <div>
                <Link href="/notice/write/[id]" as={`/notice/write/${data.id}`}>
                  <InquiryBtn title="수정" variant="edit-primary" type="button" />
                </Link>
                <InquiryBtn
                  title="삭제"
                  variant="edit-minor"
                  type="button"
                  onClick={() => setShow(true)}
                />
              </div>
            </div>
          )}
          <S.PostBox className="post-wrap">
            <table className="post-head">
              <thead>
                <tr>
                  <th colSpan="4">{data.title}</th>
                </tr>
                <tr>
                  <td>
                    <span className="label">번호</span>
                    <span className="post-info">{data.id}</span>
                  </td>
                  <td className="td-sm">
                    <span className="label">날짜</span>
                    <span className="post-info">
                      {data.insert_date.split("T")[0]}
                    </span>
                  </td>
                  <td className="td-sm">
                    <span className="label">작성자</span>
                    <span className="post-info">{data.username}</span>
                  </td>
                  <td className="td-sm">
                    <span className="label">조회수</span>
                    <span className="post-info">{data.views}</span>
                  </td>
                </tr>
              </thead>
            </table>
            <S.PostBox className="post-body">
              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </S.PostBox>
          </S.PostBox>
          <div className="post-button">
            <div>
              {/* post 이전글 다음글 */}
              {data.prevPost === null ? (
                <InquiryBtn title="이전글" variant="edit-inactive" type="button" />
              ) : (
                <Link
                  href="/notice/post/[id]"
                  as={`/notice/post/${data.prevPost}`}
                >
                  <InquiryBtn title="이전글" variant="edit-primary" type="button" />
                </Link>
              )}
              {data.nextPost === null ? (
                <InquiryBtn title="다음글" variant="edit-inactive" type="button" />
              ) : (
                <Link
                  href="/notice/post/[id]"
                  as={`/notice/post/${data.nextPost}`}
                >
                  <InquiryBtn title="다음글" variant="edit-primary" type="button" />
                </Link>
              )}
            </div>
            <InquiryBtn
              title="목록"
              variant="edit-primary"
              type="button"
              onClick={() => Router.push("/notice")}
            />
          </div>
        </ContainerWrapper>
      </S.PostWrapper>
      <Modal
        content="해당 게시글을 삭제하시겠습니까?"
        clickBtn="삭제"
        open={show}
        setShow={setShow}
        onClick={onModalClick}
        edit={true}
      />
    </>
  );
};

export default Post;
