"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import Modal from "../../atoms/Modal";
import { PostBtn } from "../../atoms/Button";
import { request } from "../../../../lib/api";
import { BOARD } from "../../../data/comCode";
import { selectedUser } from "../../../../states/user";
import * as S from "./post.style";

export type Post_props = {
  data?: Object | any;
};

const Post = ({ data }: Post_props) => {
  const Router = useRouter();
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
      <S.PostDetailSection>
        <S.PostDetailBox>
          <S.PostTopBtnBox>
            {status === "authenticated" && (
              <>
                <Link href="/notice/write/[id]" as={`/notice/write/${data.id}`}>
                  <PostBtn title="수정" type="button" />
                </Link>
                <PostBtn
                  title="삭제"
                  type="button"
                  color="delete"
                  onClick={() => setShow(true)}
                />
              </>
            )}
          </S.PostTopBtnBox>
          <S.PostContentBox className="post-wrap">
            <S.PostInfoGrid>
              <S.InfoTr>
                <S.InfoTh colSpan={4}>{data.title}</S.InfoTh>
              </S.InfoTr>
              <S.InfoTr>
                <S.InfoTd>
                  <span className="label">번호</span>
                  <span className="post-info">{data.id}</span>
                </S.InfoTd>
                <S.InfoTd className="td-sm">
                  <span className="label">날짜</span>
                  <span className="post-info">
                    {data.insert_date.split("T")[0]}
                  </span>
                </S.InfoTd>
                <S.InfoTd className="td-sm">
                  <span className="label">작성자</span>
                  <span className="post-info">{data.username}</span>
                </S.InfoTd>
                <S.InfoTd className="td-sm">
                  <span className="label">조회수</span>
                  <span className="post-info">{data.views}</span>
                </S.InfoTd>
              </S.InfoTr>
            </S.PostInfoGrid>
            <S.PostBodyBox className="post-body">
              <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </S.PostBodyBox>
          </S.PostContentBox>
          <S.PostBottomBtnBox>
            <div>
              {/* post 이전글 다음글 */}
              {data.prevPost === null ? (
                <PostBtn title="이전글" color="disabled" type="button" />
              ) : (
                <Link
                  href="/notice/post/[id]"
                  as={`/notice/post/${data.prevPost}`}
                >
                  <PostBtn title="이전글" type="button" />
                </Link>
              )}
              {data.nextPost === null ? (
                <PostBtn title="다음글" color="diabled" type="button" />
              ) : (
                <Link
                  href="/notice/post/[id]"
                  as={`/notice/post/${data.nextPost}`}
                >
                  <PostBtn title="다음글" type="button" />
                </Link>
              )}
            </div>
            <PostBtn
              title="목록"
              type="button"
              onClick={() => Router.push("/notice")}
            />
          </S.PostBottomBtnBox>
        </S.PostDetailBox>
      </S.PostDetailSection>
      <Modal
        content="해당 게시글을 삭제하시겠습니까?"
        clickBtn="삭제"
        open={show}
        onClose={setShow}
        onClick={onModalClick}
        edit={true}
      />
    </>
  );
};

export default Post;
