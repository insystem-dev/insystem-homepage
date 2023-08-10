'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import TrWrapper from './tableTr.style';
import PostTag from '../../atoms/PostTag';

const TableTr = ({
    item,
}: any) => {
    const postDate = moment(item.insert_date).format('YYYY-MM-DD');

    return (
        <TrWrapper className={`${item.fixed ? "notice-fixed" : ""}`}>
            {/* 번호 */}
            {item.fixed ?
                <td className="td-id">중요</td>
                :
                <td className="td-id">{item.id}</td>
            }
            {/* 제목 */}
            <td className="td-title">
                <Link href="/notice/post/[id]" as={`/notice/post/${item.id}`} legacyBehavior>
                    <a> {item.title} </a>
                </Link>
            </td>
            {/* 날짜 */}
            <td className="td-date">{postDate}</td>
            {/* 작성자 */}
            <td className="td-username">{item.username}</td>
            {/* 조회수 */}
            <td className="td-views">{item.views}</td>
        </TrWrapper>
    );
};

export default TableTr;