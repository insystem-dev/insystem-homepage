'use client'

import styled from 'styled-components';

export const NoticeBlockWrapper = styled.div`
    display: flex;
    align-items: center;
    &+ div {
        &::before {
            content: "";
            height: 140px;
            border-left: 1px solid #eaeaea;
        }
    }

    .notice-info-wrap {
        display: flex;
        width: 210px;
        height: 200px;
        padding: 50px 35px;
        background: #fff;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }
`

export const NoticeBlockBox  = styled.div`
    &:hover {
        .notice-info-title {
            margin-bottom: 7px;
            font-weight: 600;
            letter-spacing: -.9px;
            border-bottom: 1px solid #000;
        }

        .notice-info-content {
            font-weight: 500;
            letter-spacing: -.9px;
        }
    }

    .notice-info-title {
        overflow: hidden;
        margin-bottom: 8px;
        font-size: 1.8rem;
        font-weight: 500;
        letter-spacing: -.8px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .notice-info-content {
        display: -webkit-box;
        overflow: hidden;
        color: #3B3B3B;
        font-size: 1.3rem;
        letter-spacing: -.8px;
        text-overflow: ellipsis;
        white-space: normal;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .notice-info-date {
        margin-top: 5px;
        color: #888888;
        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: -.8px;
        text-align: right;
    }
`;