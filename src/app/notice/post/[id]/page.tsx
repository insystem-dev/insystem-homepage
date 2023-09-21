"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { PageHeader } from "../../../../common/components/organisms/PageHeader";
import Post from "../../../../common/components/organisms/Post";

const Notice = ({ session, item }: any) => {
  return (
    <>
      <SessionProvider session={session}>
        <PageHeader title="공지사항" subTitle="NOTICE" variant="notice" />
        <Post data={item} />
      </SessionProvider>
    </>
  );
};

// export const getInitialProps = async (context: any) => {
//   const { id } = context.params;

//   const res = await request({
//     method: "GET",
//     url: `/api/${BOARD}`,
//     params: { id },
//   });

//   return {
//     props: {
//       item: res[0],
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const items = await request({
//     method: "GET",
//     url: `/api/${BOARD}`,
//   });
//   // const items = await res.json();
//   const ids = items.map((item: any) => item.id);
//   const paths = ids.map((id: any) => {
//     return {
//       params: { id: id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Notice;
