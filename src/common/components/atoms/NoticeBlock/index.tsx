'use client'

import React, { useEffect, useState } from 'react';
import * as S from './NoticeBlock.style'
import PostTag from '../PostTag';
import Link from 'next/link';

export type noticeBolck = {
    data: any
}

const NoticeBlock = ({
    data,
}: noticeBolck) => {
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
        <S.NoticeBlockWrapper>
            <Link href="/notice/post/[id]" as={`/board/${data.id}`} legacyBehavior>
                <S.NoticeBlockBox className="notice-info-wrap">
                    <S.NoticeBlockBox>
                        <div className="notice-info-title">{data.title}</div>
                        {dateNew === true && <PostTag type="new" />}
                    </S.NoticeBlockBox>
                    <S.NoticeBlockBox>
                        <div className="notice-info-content">{data.content}</div>
                        <div className="notice-info-date">{data.insert_date}</div>
                    </S.NoticeBlockBox>
                </S.NoticeBlockBox>
            </Link>
        </S.NoticeBlockWrapper>
    );
};

export default NoticeBlock;