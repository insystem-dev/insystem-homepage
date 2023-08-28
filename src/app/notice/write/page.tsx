"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { PageHeader } from "../../../common/components/organisms/PageHeader";
import WritePage from "../../../common/components/organisms/WritePage";

const Write = ({}) => {
  return (
    <SessionProvider>
      <PageHeader title="공지사항" subTitle="NOTICE" variant="notice" />
      <WritePage />
    </SessionProvider>
  );
};

export default Write;
