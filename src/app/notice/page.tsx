'use client'

import React from 'react';
import NoticePage from '../../common/components/organisms/NoticePage';
import BoardPage from '../../common/components/organisms/Post';
import { PageHeader } from '../../common/components/organisms/PageHeader';
import { SessionProvider } from 'next-auth/react';

const Notice = (session: any) => {
    return (
        <>
            <SessionProvider session = {session}>
                <PageHeader title="공지사항" subTitle="NOTICE" variant="notice" />
                <NoticePage>
                    <BoardPage />
                </NoticePage>
            </SessionProvider> 
        </>
    )
}

export default Notice;