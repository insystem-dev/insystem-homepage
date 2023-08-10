import { useQuery } from "@tanstack/react-query";
import Post from "../../common/components/organisms/Post/index";
import { request } from "../../lib/api";
import { AxiosError } from "axios";

export type noticeList = {
  contents: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: string;
  views: number;
  name: string;
};

export default function Notice() {
  const { data: noticeList, refetch: noticeRefetch } = useQuery<
    noticeList[],
    AxiosError
  >(["get_notice"], () =>
    request<noticeList[]>({
      method: "GET",
      url: `notice`,
    }).then((res) => {
      return res;
    })
  );

  return (
    <Post>
      <NoticeList noticeList={noticeList} />
    </Post>
  );
}
