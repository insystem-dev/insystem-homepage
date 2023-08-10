'use client'

import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { ContainerWrapper } from '../../molecules/Container';
import NoticeBlock from '../../atoms/NoticeBlock';
import { notice } from '../../../data';
import * as S from './noticeSection.style';
import Link from 'next/link';


const NoticeSection = ({
}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const orderedData: any = notice.sort(
            (a: any, b: any) => new Date(b.insert_date).getTime() - new Date(a.insert_date).getTime());
        setItems(orderedData.slice(0, 5));
    }, []);


    return (
        <S.NoticeSectionWrapper>
            <Fade direction="up">
                <ContainerWrapper>
                    <S.NoticeSection_box className="row">
                        <S.NoticeSection_box className="row-title">
                            공지사항
                        </S.NoticeSection_box>
                        { notice && items.map((item, idx) => {
                            return (
                                <NoticeBlock data={item} key={idx} />
                        )})}
                    </S.NoticeSection_box>
                    <Link href="/notice" legacyBehavior>
                        <a className="notice-link">
                            〉
                        </a>
                    </Link>
                </ContainerWrapper>
            </Fade>
        </S.NoticeSectionWrapper>
    )
}

export default NoticeSection;