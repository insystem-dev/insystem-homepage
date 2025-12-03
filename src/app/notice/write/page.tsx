"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { PageHeader } from "../../../shared/ui";
import { WritePage } from "../../../features/notice/ui";

const Write = ({}) => {
  return (
    <SessionProvider>
      <PageHeader title="공지사항" subTitle="NOTICE" variant="notice" />
      <WritePage />
    </SessionProvider>
  );
};

export default Write;
