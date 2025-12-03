export interface Notice {
  id: number;
  username: string;
  user_id: string;
  title: string;
  content: string;
  insert_date: string;
  views: string;
  fixed: number;
}

export interface NoticeCreateInput {
  title: string;
  content: string;
  fixed?: boolean;
}

export interface NoticeUpdateInput extends NoticeCreateInput {
  id: number;
}
