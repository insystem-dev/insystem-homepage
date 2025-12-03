export * from "./types";

// Mock data - 나중에 API에서 가져올 예정
export const mockNotices: Notice[] = [
  {
    id: 1,
    username: "관리자",
    user_id: "admin",
    title: "23년 하계휴가 공지",
    content: "2023년 하계휴가로 인한 휴무일정 안내 드립니다.",
    insert_date: "2023-08-27 13:12:00",
    views: "0",
    fixed: 0,
  },
];

import { Notice } from "./types";
