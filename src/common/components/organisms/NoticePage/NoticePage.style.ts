'use client'

import styled, { css } from 'styled-components';

export const NoticeWrapper = styled.section`
    .container {
        padding: 70px 0;

        .notice-edit {
            display: flex;
            width: 100%;
            max-width: 1170px;
            margin: 0 auto 10px;
            justify-content: flex-end;
        }
    }
`

export const NoticeBlock_box = styled.div`
  ${(props) => {
    if (props.className == "notice-info-wrap") {
      return css(
        {display: 'flex'},
        {width: '210px'},
        {height: '200px'},
        {padding: '30px 35px'},
        {background: '#fff'},
        {flexDirection: 'column'},
        {justifyContent: 'space-between'},
        {cursor: 'pointer'},
      )
    }
  }};

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

`