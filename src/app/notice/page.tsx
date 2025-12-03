"use client";

import React from "react";
import { NoticePage } from "../../features/notice/ui";
import { PageHeader } from "../../shared/ui";
import { SessionProvider } from "next-auth/react";

const Notice = (session: any) => {
  return (
    <>
      <SessionProvider session={session}>
        <PageHeader title="공지사항" subTitle="NOTICE" variant="notice" />
        <NoticePage />
      </SessionProvider>
    </>
  );
};

export default Notice;
